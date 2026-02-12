import React from 'react'
import TmpBox from './TmpBox'


function Dashboard() {
    const values = [
        {
            link: "https://tailux.piniastudio.com/dashboards/sales",
            image: './images/dashboard/sales.webp',
            title: "Sales",
            text: "Analyze sales performance insights."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/crm-analytics",
            image: './images/dashboard/crm-analytics.webp',
            title: "CRM Analytics",
            text: "View customer relationship metrics."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/orders",
            image: './images/dashboard/orders.webp',
            title: "Orders",
            text: "Track and manage order data."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/crypto-1",
            image: './images/dashboard/crypto-1.webp',
            title: "Cryptocurrency V1",
            text: "Monitor cryptocurrency trends"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/crypto-2",
            image: './images/dashboard/crypto-2.webp',
            title: "Cryptocurrency V2",
            text: "Enhanced crypto analytics"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/banking-1",
            image: './images/dashboard/banking-1.webp',
            title: "Banking V1",
            text: "Financial metrics dashboard"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/banking-2",
            image: './images/dashboard/banking-2.webp',
            title: "Banking V2",
            text: "Advanced banking insights"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/personal",
            image: './images/dashboard/personal.webp',
            title: "Personal",
            text: "Track personal analytics data"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/cms-analytics",
            image: './images/dashboard/cms-analytics.webp',
            title: "CMS Analytics",
            text: "Content management system stats"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/influencer",
            image: './images/dashboard/influencer.webp',
            title: "Influencer",
            text: "Matrics for influencer tracking"
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/travel",
            image: './images/dashboard/travel.webp',
            title: "Travel",
            text: "Monitor travel-related analytics."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/teacher",
            image: './images/dashboard/teacher.webp',
            title: "Teacher",
            text: "Dashboard for educators' insights."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/education",
            image: './images/dashboard/education.webp',
            title: "Education",
            text: "Education-focused data analysis."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/authors",
            image: './images/dashboard/authors.webp',
            title: "Authors",
            text: "Manage and view author metrics."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/doctor",
            image: './images/dashboard/doctor.webp',
            title: "Doctor",
            text: "Medical analytics and insights."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/employees",
            image: './images/dashboard/employees.webp',
            title: "Employees",
            text: "Employee performance dashboard."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/workspaces",
            image: './images/dashboard/workspaces.webp',
            title: "Workspaces",
            text: "Insights into team workspaces."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/mettings",
            image: './images/dashboard/meetings.webp',
            title: "Meetings",
            text: "View metting stats and data."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/projects-board",
            image: './images/dashboard/projects-board.webp',
            title: "Projects Board",
            text: "Manage and track projects."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/widget-ui",
            image: './images/dashboard/widget-ui.webp',
            title: "Widget UI",
            text: "Customizable user interface widgets."
        },
        {
            link: "https://tailux.piniastudio.com/dashboards/widget-contact",
            image: './images/dashboard/widget-contact.webp',
            title: "Widget Conatact",
            text: "Manage contact interface widgets."
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-9">
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
export default Dashboard
