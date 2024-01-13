import { useRef, useState } from "react";

// Icons
import { FaAngleRight, FaAnglesRight, FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";

// Styles
import './react-dual_list.css'


const DualList = ({ options, selected, onSelectChange }) => {

    const [available, setAvailable] = useState(options.data)

    const availableRef = useRef()
    const selectedRef = useRef()

    const handleAdd = () => {
        const selectedVal = availableRef.current.value

        if (!selectedVal)
            return
        // remove element from available list
        setAvailable(available.filter((option) => option !== selectedVal))

        // add element to selected list
        onSelectChange([...selected, selectedVal])
    }

    const handleRemove = () => {
        const selectedVal = selectedRef.current.value

        if (!selectedVal)
            return

        // remove element from selected list
        onSelectChange(selected.filter((option) => option !== selectedVal))

        // add element to available list
        setAvailable([...available, selectedVal])
    }

    const handleAddAll = () => {
        // add all elements to selected list
        onSelectChange([...selected, ...available])
        // remove all elements from available list
        setAvailable([])
    }

    const handleRemoveAll = () => {
        // add all elements to available list
        setAvailable([...available, ...selected])
        // remove all elements from selected list
        onSelectChange([])
    }

    return (
        <div className='list_container'>
            <div className="list-box-container">
                <h3>{options.title1}</h3>
                <div className='list-box-main'>
                    <select id="availableList" multiple className='select_box' ref={availableRef}>
                        {available.length !== 0 &&
                            available.map((options, index) => (
                                <option key={index} value={options}>{options}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="icon_div">
                <div
                    className='icon_box'
                    onClick={handleAdd}
                >
                    <FaAngleRight className='icon' />
                </div>
                <div
                    className='icon_box'
                    onClick={handleAddAll}
                >
                    <FaAnglesRight className='icon' />
                </div>
                <div
                    className='icon_box'
                    onClick={handleRemove}
                >
                    <FaAngleLeft className='icon' />
                </div>
                <div
                    className='icon_box'
                    onClick={handleRemoveAll}
                >
                    <FaAnglesLeft className='icon' />
                </div>
            </div>

            <div className="list-box-container">
                <h3>{options.title2}</h3>
                <div className='list-box-main'>
                    <select id='selectedList' multiple className="select_box" ref={selectedRef}>
                        {selected.length !== 0 &&
                            selected.map((options, index) => (
                                <option key={index} value={options}>{options}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default DualList;