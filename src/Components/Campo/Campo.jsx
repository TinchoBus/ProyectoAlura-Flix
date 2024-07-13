
export const Campo = (props) => {
    const {id,type,place,value,onChange} = props

    return (
        <>
            <input type={type} value={value} id={id} placeholder={place} required={true} onChange={onChange}/>
        </>
    )
}