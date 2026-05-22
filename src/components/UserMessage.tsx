interface UserMessageProps {
    message: string;
}

export const UserMessage = ({ message }: UserMessageProps) => {
    return (
        <div className="mt-1 mb-1 max-w-[75%] ml-auto" style={{ background: '#526447', borderRadius: '18px 18px 4px 18px', padding: '10px 14px' }}>
            <p style={{ color: '#fbf9f2', fontFamily: 'Work Sans, sans-serif', fontSize: '13px', lineHeight: '1.5', margin: 0 }} className="break-words">{message}</p>
        </div>
    );
};