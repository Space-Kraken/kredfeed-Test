import React from 'react'
import { FcHighPriority } from 'react-icons/fc';
import { Atoms } from '../../../Atoms';

export default function AvalContact(props:any) {

    const inputs=[
        "Correo Electrónico",
        "Teléfono",
        "Pais",
        "Estado",
        "Ciudad",
        "Colonia",
        "Calle",
        "Numero Exterior",
        "Numero Interior",
        "Codigo Postal",
    ]

    return (
        <Atoms.Body style={props.bodyStyle}>
            <Atoms.Title text={props.title} />
            {props.data.map((item:any, index:number) => {
                const inputValue = localStorage!.getItem(item.id)!;
                const value = JSON.parse(inputValue);
            
                let error = false;
                if(inputValue===""|| inputValue==="null"){
                    error=true;
                }
                let input;
                if(typeof value === "object" && value!==null){
                    input = value.label
                }else{
                    input = value
                }
                return (
                    <div className='flex flex-row w-full justify-center items-center'
                        key={index} 
                    >
                        <div className={`${props.inputStyle} ${error ? 'border-red-500' : 'border-purple-500'}`}>
                            {error 
                                ? <span className='flex flex-row justify-between items-center'>
                                    <div>{inputs[index]}</div>
                                    <FcHighPriority />
                                </span> 
                            : input}
                        </div>
                    </div>
                )
            })}
        </Atoms.Body>
    )
}

AvalContact.defaultProps = {
    id: true,
    bodyStyle: "flex flex-col w-full justify-center items-center",
    inputStyle: "w-1/2 bg-white border-2 rounded py-2 px-4 mt-1 mb-2 text-gray-700",
    disabled: true,
    type: "text",
    title:"Contacto Aval"
}