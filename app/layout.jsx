import '@styles/globals.css'

export const metadata = {
    title: "ai-prompts",
    description: "A collection of AI-generated prompts for creative writing.",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className ="gradient" />
                </div>

                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;