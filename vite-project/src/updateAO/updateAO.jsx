import { useState } from "react"

function UpdateAO() {

    const [car , setCar] = useState([])

    const [year , setYear] = useState(new Date().getFullYear())
    const [name, setName] = useState("")
    const [content , setContent] = useState("")

    function onChangeHandleYear(object) {
        setYear(object.target.value)
    }
    function onChangeHandleName(object) {
        setName(object.target.value)
    }
    function onChangeHandleContent(object) {
        setContent(object.target.value)
    }

    function add(){
        const newCart =  {
            "year": year,
            "name": name ,
            "content": content
        }

        setCar(car => [...car , newCart])

        setName("")
        setContent("")
        setYear(new Date().getFullYear())

    }

    function handleDelte(index) {
        setCar(car => car.filter((_,i) => i != index))
    }

    return (
        <div className="frame">
            <h1>List of Car Object</h1>
            <ul>
                {
                    car.map((car , index) => <li onClick={()=>handleDelte(index)} key={index}>{car.name} - {car.year} - {car.content}</li>)
                }
            </ul>
            <input type="number" name="year" onChange={onChangeHandleYear} value={year} />
            <input type="text" name="name" onChange={onChangeHandleName} value={name} />
            <input type="text" name="content" onChange={onChangeHandleContent} value={content} />

            <button onClick={add}>Submit</button>
        </div>
    )
}

export default UpdateAO