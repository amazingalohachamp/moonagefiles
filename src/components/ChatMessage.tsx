interface ChatMessageProps {
    message: string;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <div className="mt-1 mb-1 max-w-[75%]" style={{ background: '#f5f4eb', border: '1px solid #e0ddd5', borderRadius: '18px 18px 18px 4px', padding: '10px 14px' }}>
            <p style={{ color: '#3a3a2e', fontFamily: 'Newsreader, serif', fontSize: '13px', lineHeight: '1.5', margin: 0 }} className="break-words">{message}</p>
        </div>
    );
};