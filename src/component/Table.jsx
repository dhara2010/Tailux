import React from 'react'
import TmpBox from './TmpBox'


function Table() {
    const values = [
        {
            link: "https://tailux.piniastudio.com/tables/orders-datatable-1",
            image: './images/table/orders-1.webp',
            title: "Orders Datatable V1",
            text: "Basic orders table layout."
        },
        {
            link: "https://tailux.piniastudio.com/tables/orders-datatable-2",
            image: './images/table/orders-2.webp',
            title: "Orders Datatable V2",
            text: "Advanced orders table design."
        },
        {
            link: "https://tailux.piniastudio.com/tables/courses-datatable",
            image: './images/table/courses.webp',
            title: "Courses Datatable",
            text: "Course-related data organization."
        },
        {
            link: "https://tailux.piniastudio.com/tables/users-datatable",
            image: './images/table/users.webp',
            title: "Users Datatable",
            text: "View and manage user data."
        },
        {
            link: "https://tailux.piniastudio.com/tables/projects-datatable",
            image: './images/table/projects.webp',
            title: "Projects Datatale",
            text: "Table for project information."
        },
        {
            link: "https://tailux.piniastudio.com/tables/basic-table",
            image: './images/table/basic.webp',
            title: "Basic Table",
            text: "Standard table structure."
        },
        {
            link: "https://tailux.piniastudio.com/tables/react-table",
            image: './images/table/react-table.webp',
            title: "React Table",
            text: "Interactive tanstack table tables."
        },
        {
            link: "https://tailux.piniastudio.com/tables/advanced-tables",
            image: './images/table/advanced.webp',
            title: "Advanced Table",
            text: "Sophisticated table layouts."
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
export default Table
