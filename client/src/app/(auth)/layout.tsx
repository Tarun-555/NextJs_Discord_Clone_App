const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex items-center justify-center h-screen bg-slate-900'>
            <div className='flex h-auto flex-col justify-center px-16 pb-8 lg:px-8 bg-white rounded-md'>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
