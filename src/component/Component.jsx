import React from 'react'
import TmpBox from './TmpBox'


function Component() {
  const values = [
    {
      link: "https://tailux.piniastudio.com/components/basic-ui/avatar",
      image: './images/component/avatar.webp',
      title: "Avatar",
      text: "Show user profile images."
    },
    {
      link: "https://tailux.piniastudio.com/components/basic-ui/button",
      image: './images/component/button.webp',
      title: "Button",
      text: "Trigger actions or navigation."
    },
    {
      link: "https://tailux.piniastudio.com/components/basic-ui/badge",
      image: './images/component/badge.webp',
      title: "Badge",
      text: "Highlight counts or statuses."
    },
    {
      link: "https://tailux.piniastudio.com/components/basic-ui/tag",
      image: './images/component/tag.webp',
      title: "Tag",
      text: "Label items or categories."
    },
    {
      link: "https://tailux.piniastudio.com/components/basic-ui/divider",
      image: './images/component/divider.webp',
      title: "Divider",
      text: "Separate sections with lines."
    },
    {
      link: "https://tailux.piniastudio.com/components/basic-ui/typography",
      image: './images/component/typography.webp',
      title: "Typography",
      text: "Stylize text for content."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/box",
      image: './images/component/box.webp',
      title: "Box",
      text: "Group and structure content."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/popover",
      image: './images/component/popover.webp',
      title: "Popover",
      text: "show overlays for extra content."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/timeline",
      image: './images/component/timeline.webp',
      title: "Timeline",
      text: "Visualize events over time."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/collapse",
      image: './images/component/collapse.webp',
      title: "Collapse",
      text: "Expand or hide sections."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/legend",
      image: './images/component/legend.webp',
      title: "Legend",
      text: "Explain symbols or patterns."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/mask",
      image: './images/component/mask.webp',
      title: "Mask",
      text: "Highlight areas with overlays."
    },
    {
      link: "https://tailux.piniastudio.com/components/data-display/contextual-help",
      image: './images/component/contextual-help.webp',
      title: "Contextual Help",
      text: "Provide inline tips or guidance."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/accordion",
      image: './images/component/accordion.webp',
      title: "Accordion",
      text: "Organize content in collapsible."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/tab",
      image: './images/component/tab.webp',
      title: "Tab",
      text: "Navigate using tabbed sections."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/dropdown",
      image: './images/component/dropdown.webp',
      title: "Dropdown",
      text: "Reveal options in a menu."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/steps",
      image: './images/component/steps.webp',
      title: "Steps",
      text: "Guide users step-by-step."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/pagination",
      image: './images/component/pagination.webp',
      title: "Pagination",
      text: "Navigate between content pages."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/menu-list",
      image: './images/component/menu-list.webp',
      title: "Menu List",
      text: "Create interactive item lists."
    },
    {
      link: "https://tailux.piniastudio.com/components/navigation/treeview",
      image: './images/component/treeview.webp',
      title: "Treeview",
      text: "Display hierarchical data visually."
    },
    {
      link: "https://tailux.piniastudio.com/components/loading/progress",
      image: './images/component/progress.webp',
      title: "Progress",
      text: "Show task or process status."
    },
    {
      link: "https://tailux.piniastudio.com/components/loading/circlebar",
      image: './images/component/circlebar.webp',
      title: "Circlebar",
      text: "Display circular progress visually."
    },
     {
      link: "https://tailux.piniastudio.com/components/loading/skeleton",
      image: './images/component/skeleton.webp',
      title: "Skeleton",
      text: "Placeholder for loading content."
    },
     {
      link: "https://tailux.piniastudio.com/components/loading/spinner",
      image: './images/component/spinner.webp',
      title: "Spinner",
      text: "Indicate loading with animation."
    },
     {
      link: "https://tailux.piniastudio.com/components/feedback/tooltip",
      image: './images/component/tooltip.webp',
      title: "Tooltip",
      text: "Show information on hover."
    },
    {
      link: "https://tailux.piniastudio.com/components/feedback/notification",
      image: './images/component/notification.webp',
      title: "Notification",
      text: "Display messages or alerts."
    },
     {
      link: "https://tailux.piniastudio.com/components/feedback/alert",
      image: './images/component/alert.webp',
      title: "Alert",
      text: "Notify users with warnings."
    },
    {
      link: "https://tailux.piniastudio.com/components/modal/modal",
      image: './images/component/modal.webp',
      title: "Modal",
      text: "Show overlays for interaction."
    },
     {
      link: "https://tailux.piniastudio.com/components/modal/drawer",
      image: './images/component/drawer.webp',
      title: "Drawer",
      text: "Slide-in panels for content."
    },
     {
      link: "https://tailux.piniastudio.com/components/advanced/scroll-shadow",
      image: './images/component/scroll-shadow.webp',
      title: "Scroll Shadow",
      text: "Add shadows to scroll areas."
    },
     {
      link: "https://tailux.piniastudio.com/components/advanced/charts",
      image: './images/component/charts.webp',
      title: "Charts",
      text: "Visualize data with charts."
    },
    {
      link: "https://tailux.piniastudio.com/components/advanced/carousel",
      image: './images/component/carousel.webp',
      title: "Carousel",
      text: "Show content in slideshow."
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
export default Component
