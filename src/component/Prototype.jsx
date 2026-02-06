import React from 'react'
import TmpBox from './TmpBox'


function Prototype() {
    const values = [
        {
            link: "https://tailux.piniastudio.com/prototypes/onboarding/onboarding-1",
            image: './images/prototypes/onboarding-1.webp',
            title: "Onboarding v1",
            text: "Basic onboarding experience."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/onboarding/onboarding-2",
            image: './images/prototypes/onboarding-2.webp',
            title: "Onboarding v2",
            text: "Basic onboarding interface."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-1",
            image: './images/prototypes/users-card-1.webp',
            title: "User Card v1",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-2",
            image: './images/prototypes/users-card-2.webp',
            title: "User Card v2",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-3",
            image: './images/prototypes/users-card-3.webp',
            title: "User Card v3",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-4",
            image: './images/prototypes/users-card-4.webp',
            title: "User Card v4",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-5",
            image: './images/prototypes/users-card-5.webp',
            title: "User Card v5",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-6",
            image: './images/prototypes/users-card-6.webp',
            title: "User Card v6",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/users-card/user-card-7",
            image: './images/prototypes/users-card-7.webp',
            title: "User Card v7",
            text: "User profile card layout."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-1",
            image: './images/prototypes/blog-card-1.webp',
            title: "Blog card v1",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-2",
            image: './images/prototypes/blog-card-2.webp',
             title: "Blog card v2",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-3",
            image: './images/prototypes/blog-card-3.webp',
            title: "Blog card v3",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-4",
            image: './images/prototypes/blog-card-4.webp',
             title: "Blog card v4",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-5",
            image: './images/prototypes/blog-card-5.webp',
             title: "Blog card v5",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-6",
            image: './images/prototypes/blog-card-6.webp',
             title: "Blog card v6",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-7",
            image: './images/prototypes/blog-card-7.webp',
             title: "Blog card v7",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/blog-card/blog-card-8",
            image: './images/prototypes/blog-card-8.webp',
             title: "Blog card v8",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/prototypes/post-details",
            image: './images/prototypes/post-details.webp',
            title: "Post Details",
            text: "Blog post preview."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/price-list/price-list-1",
            image: './images/prototypes/price-list-1.webp',
            title: "Price List v1",
            text: "Display pricing information visually."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/price-list/price-list-2",
            image: './images/prototypes/price-list-2.webp',
            title: "Price List v2",
            text: "Display pricing information visually."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/price-list/price-list-3",
            image: './images/prototypes/price-list-3.webp',
            title: "Price List v3",
            text: "Display pricing information visually."
        },
         {
            link: "https://tailux.piniastudio.com/prototypes/price-list/price-list-4",
            image: './images/prototypes/price-list-4.webp',
            title: "Price List v4",
            text: "Display pricing information visually."
        },
         {
            link: "https://tailux.piniastudio.com/prototypes/help/help-1",
            image: './images/prototypes/help-1.webp',
            title: "Help v1",
            text: "Help section with basic tools."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/help/help-2",
            image: './images/prototypes/help-2.webp',
            title: "Help v2",
            text: "Help section with basic tools."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/help/help-3",
            image: './images/prototypes/help-3.webp',
            title: "Help v3",
            text: "Help section with basic tools."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/invoice/invoice-1",
            image: './images/prototypes/invoice-1.webp',
            title: "invoice v1",
            text: "Standard invoice template."
        },
         {
            link: "https://tailux.piniastudio.com/prototypes/invoice/invoice-2",
            image: './images/prototypes/invoice-2.webp',
            title: "invoice v2",
            text: "Standard invoice template."
        }, 
        {
            link: "https://tailux.piniastudio.com/prototypes/sign-in/sign-in-1",
            image: './images/prototypes/sign-in-1.webp',
            title: "Sign In v1",
            text: "Simple sign-in screen."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/sign-in/sign-in-2",
            image: './images/prototypes/sign-in-2.webp',
            title: "Sign In v2",
            text: "Simple sign-in screen."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/sign-up/sign-up-1",
            image: './images/prototypes/sign-up-1.webp',
            title: "Sign Up v1",
            text: "Create an account interface."
        },
        {
            link: "https://tailux.piniastudio.com/prototypes/sign-up/sign-up-2",
            image: './images/prototypes/sign-up-2.webp',
            title: "Sign Up v2",
            text: "Create an account interface."
        },
    ]
    return (
        <div className="grid grid-cols-3 gap-4 -mt-9">
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
export default Prototype
