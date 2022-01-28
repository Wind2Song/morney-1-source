const Input:React.FC = () => {
    return (
    <label>
        <span>备注</span>
        <input 
          type="Text" 
          placeholder='在这里添加备注' 
        //   value={note}
        //   onChange={(e)=>{props.onChange(e.target.value)}}
        />
    </label>  
    )
}

export {Input};