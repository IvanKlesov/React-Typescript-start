import React, {FC, useRef, useState} from 'react';





const EventExample: FC = () => {  
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler =(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler =(e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler =(e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
    }

    const dropHandler =(e: React.DragEvent<HTMLDivElement>) => {
        console.log('drop');
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler =(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
    
    const leaveHandler =(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    return (         
            <div style={{padding: '15px', border: '1px solid greay'}}>
                <input value={value} onChange={changeHandler} type='text' placeholder="Control"/>
                <input ref={inputRef} type='text' placeholder='No control'/>
                <button onClick={clickHandler}>Click</button>
                <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'red'}}> 

                </div>
                <div
                    onDrop={dropHandler}
                    onDragLeave={leaveHandler}
                    onDragOver={dragWithPreventHandler}
                    style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: 15}}> 

                </div>
            </div>     
    );
}

export default EventExample;
