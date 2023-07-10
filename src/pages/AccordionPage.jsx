import Accordion from "../components/Accordion";

function AccordionPage(){
    const items =[
        {
            id:'dssd',
            label:'Can i use React on a project',
            content: 'Yes you can on any project'
        },
        {
            id:'dresj',
            label:'Can i use React on a project',
            content: 'Yes you can'
        },
        {
            id:'ewewew',
            label:'Can i use React on a project',
            content: 'Sure you do'
        },

    ]

    return <Accordion items={items}/>
}

export default AccordionPage;