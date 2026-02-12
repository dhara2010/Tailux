import React from 'react'
import TmpBox from './TmpBox'


function Forms() {
    const values = [
        {
            link: "https://tailux.piniastudio.com/forms/ekyc-form",
            image: './images/forms/ekyc.webp',
            title: "EKYC Form",
            text: "Electronic KYC submission form."
        },
        {
            link: "https://tailux.piniastudio.com/forms/add-product-form",
            image: './images/forms/add-product.webp',
            title: "Add Product Form",
            text: "Form to add new products."
        },
        {
            link: "https://tailux.piniastudio.com/forms/new-post-form",
            image: './images/forms/new-post.webp',
            title: "New Post Form",
            text: "Create and publish new posts."
        },
        {
            link: "https://tailux.piniastudio.com/forms/input",
            image: './images/forms/input.webp',
            title: "Input",
            text: "Standard input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/input-group",
            image: './images/forms/input-group.webp',
            title: "Input Group",
            text: "Grouped input fields for enhaa=nced organization."
        },
        {
            link: "https://tailux.piniastudio.com/forms/input",
            image: './images/forms/input.webp',
            title: "Input",
            text: "Input fields with customizable masks."
        },
        {
            link: "https://tailux.piniastudio.com/forms/checkbox",
            image: './images/forms/checkbox.webp',
            title:"Checkbox",
            text: "Checkbox input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/radio",
            image: './images/forms/radio.webp',
            title: "Radio",
            text: "Radio input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/switch",
            image: './images/forms/switch.webp',
            title: "Switch",
            text: "Switch input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/swap",
            image: './images/forms/swap.webp',
            title: "Swap",
            text: "Swap between states"
        },
        {
            link: "https://tailux.piniastudio.com/forms/textarea",
            image: './images/forms/textarea.webp',
            title: "Textarea",
            text: "Multi-line input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/select",
            image: './images/forms/select.webp',
            title: "Select",
            text: "Select input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/range",
            image: './images/forms/range.webp',
            title: "Range",
            text: "Range input field examples."
        },
        {
            link: "https://tailux.piniastudio.com/forms/listbox",
            image: './images/forms/listbox.webp',
            title: "Listbox",
            text: "Great accessible select menu."
        },
        {
            link: "https://tailux.piniastudio.com/forms/autocomplete",
            image: './images/forms/autocomplete.webp',
            title: "Autocomplete",
            text: "Predictive input suggestions."
        },
        {
            link: "https://tailux.piniastudio.com/forms/file-upload",
            image: './images/forms/file-upload.webp',
            title: "File Upload",
            text: "Upload file to the system."
        },
        {
            link: "https://tailux.piniastudio.com/forms/form-validation",
            image: './images/forms/form-validation.webp',
            title: "Form Validation",
            text: "Simple validate form examples"
        },
        {
            link: "https://tailux.piniastudio.com/forms/text-editor",
            image: './images/forms/text-editor.webp',
            title: "Text Editor",
            text: "Rich text editor example"
        },
        {
            link: "https://tailux.piniastudio.com/forms/filepond",
            image: './images/forms/filepond.webp',
            title: "Filepond",
            text: "Visual file upload example"
        },
        {
            link: "https://tailux.piniastudio.com/forms/datepicker",
            image: './images/forms/datepicker.webp',
            title: "Datepicker",
            text: "Select date using calendar"
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
export default Forms
