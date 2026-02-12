import React from 'react'
import TmpBox from './TmpBox'


function Applications() {
    const values = [
        {
            link: "https://tailux.piniastudio.com/apps/chat",
            image: './images/application/chat.webp',
            title: "Chat",
            text: "Messaging and communication app."
        },
        {
            link: "https://tailux.piniastudio.com/apps/ai-chat",
            image: './images/application/ai-chat.webp',
            title: "AI Chat",
            text: "AI-powred chat functionality."
        },
        {
            link: "https://tailux.piniastudio.com/apps/kanban",
            image: './images/application/kanban.webp',
            title: "Kanban Board",
            text: "Organize tasks visually."
        },
        {
            link: "https://tailux.piniastudio.com/apps/mail",
            image: './images/application/mail.webp',
            title: "Mail",
            text: "Manage and view email communications."
        },
        {
            link: "https://tailux.piniastudio.com/apps/todo",
            image: './images/application/todo.webp',
            title: "Todo",
            text: "Track tasks and priorities."
        },
        {
            link: "https://tailux.piniastudio.com/apps/nft-1",
            image: './images/application/nft-1.webp',
            title: "NFT v1",
            text: "View and manage nNFTs"
        },
        {
            link: "https://tailux.piniastudio.com/apps/nft-2",
            image: './images/application/nft-2.webp',
            title: "NFT v2",
            text: "Enhanced NFT analytics"
        },
        {
            link: "https://tailux.piniastudio.com/apps/filemanager",
            image: './images/application/filemanager.webp',
            title: "File Manager",
            text: "Organize and store files."
        },
        {
            link: "https://tailux.piniastudio.com/apps/pos",
            image: './images/application/pos.webp',
            title: "POS App",
            text: "Point-of-sale application interface"
        },
        {
            link: "https://tailux.piniastudio.com/apps/travel",
            image: './images/application/travel.webp',
            title: "Travel",
            text: "App for travel management."
        }
    ]
    return (
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-9">
=======
        <div className="grid grid-cols-3 gap-4 -mt-9">
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
            {values.map((value, index) => (
                <TmpBox
                    key={index}
                    link={value.link}
                    image={value.image}
                    title={value.title}
                    text={value.text}
                />
            ))}
        </div>
    )
}
export default Applications
