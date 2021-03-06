import React from 'react'
import { Atoms } from '../../Atoms'

export default function Form(props:any) {
    const handleSubmit = (event:any) => {
        event.preventDefault()
        props.action(event)
    }

    return (
        <form 
            onSubmit={(event)=>{
                handleSubmit(event)
            }}
            className={props.style}
        > 
            <Atoms.Title
                style={props.titleStyle}
                text={props.title}
            />
                {props.sections.map((section:any, index:number)=>(
                    <div 
                        key={index}
                        className='flex flex-col'
                        >
                        <span className='font-normal'>{section.title}</span>
                        {section.fields.map((field:any, index:number)=>(
                            field.inputType === 'select' 
                            ? <Atoms.Select
                                key={index}
                                id={field.id}
                                validateType={field.validateType}
                                inputTitle={field.inputTitle}
                                options={field.options}
                              />
                            : <Atoms.Input 
                                inputTitle={field.inputTitle}
                                key={index}
                                id={field.id}
                                type={field.type}
                                validateType={field.validateType}
                                placeholder={field.placeholder}
                            />
                        ))}
                    </div>
                ))}
                <div className='mt-4 mr-2 flex flex-row justify-end'>
                    {props.actions.map((section:any, index:number)=>(
                        <Atoms.Button
                            key={index} 
                            text={section.value}
                            action={()=>{props.action("next")}}
                        />
                    ))}
                </div>
        </form>
    )
}

Form.defaultProps = {
    style: 'flex flex-col justify-center items-center p-4',
    action: () => {}
}
