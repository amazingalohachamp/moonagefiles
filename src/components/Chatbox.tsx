import { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";
import { UserMessage } from "./UserMessage";
import { ChatMessage } from "./ChatMessage";
import { chat } from "../services/chatService";
import { motion } from 'motion/react';

interface Message {
    id: number;
    type: "user" | "bot";
    text: string;
}

interface ChatboxProps {
    setIsChatClicked: (value: boolean) => void;
}

export const Chatbox = ({ setIsChatClicked }: ChatboxProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const userMessage: Message = { id: Date.now(), type: "user", text: trimmed };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const { reply } = await chat(trimmed);
            const botMessage: Message = { id: Date.now() + 1, type: "bot", text: reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: Message = { id: Date.now() + 1, type: "bot", text: "Sorry, something went wrong. Please try again." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !isLoading) handleSend();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="z-[9999] fixed right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col"
            style={{
                width: 'min(340px, calc(100vw - 32px))',
                height: 'min(520px, calc(100vh - 80px))',
                background: '#fffdf7',
                borderRadius: '24px',
                border: '1px solid #e8e3d5',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}>
            <div className="w-full flex items-center justify-between px-5 py-4 rounded-t-[22px]" style={{ background: '#526447' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#fbf9f2' }}>✦</div>
                    <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', color: '#fbf9f2', fontSize: '15px' }}>moonage files</span>
                </div>
                <button onClick={() => setIsChatClicked(false)} className="text-[#fbf9f2] hover:opacity-70 transition-opacity">
                    <X size={20} />
                </button>
            </div>

            <div className="w-full flex-1 flex flex-col gap-[1rem] p-6 overflow-y-auto">
                {messages.map((msg) =>
                    msg.type === "user"
                        ? <UserMessage key={msg.id} message={msg.text} />
                        : <ChatMessage key={msg.id} message={msg.text} />
                )}
                <div ref={bottomRef} />
            </div>

            <div className="w-full flex items-center gap-2 px-3 py-3 rounded-b-[22px]" style={{ background: '#526447' }}>
                <input
                    className="flex-1 rounded-full px-4 py-2 text-sm outline-none"
                    style={{ background: '#fff9ec', color: '#2c2a22', fontFamily: 'Work Sans, sans-serif', border: 'none', fontSize: '13px' }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="type a message..."
                    disabled={isLoading}
                />
                <button
                    onClick={handleSend}
                    disabled={isLoading}
                    className="flex items-center justify-center rounded-full hover:opacity-80 transition-opacity disabled:opacity-50"
                    style={{ background: '#fff9ec', width: '34px', height: '34px', flexShrink: 0 }}
                >
                    <Send className="text-primary" size={16} />
                </button>
            </div>
        </motion.div>
    );
};