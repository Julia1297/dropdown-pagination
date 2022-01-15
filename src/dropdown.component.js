import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Popup } from "reactjs-popup";
import loadOptions from "./load-options";
const DropdownPagination = () => {
    const [value, setValue] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, onInputChangeRaw] = useState("");
    const [inputHistory, setInputHistory] = useState([]);
    const closeModal = () => setIsOpen(false);

    const onInputChange = (newInputValue, { action }) => {
        setInputHistory([
        ...inputHistory,
        {
            inputValue: newInputValue,
            action
        }
        ]);
        onInputChangeRaw(newInputValue);
    };
    const onChange = (newValue) => {
        setValue(newValue);
        if (newValue.value === 0) {
            setIsOpen(true);
        }
    };

    const saveItem = () => {
        console.log("Se deberia realizar la llamada a backend para almacenar el cliente/empresa.");
        closeModal();
        window.location.reload(false);
    };
    return (
        <div>
            <h1>CLIENTES</h1>

            <AsyncPaginate
                value={value}
                inputValue={inputValue}
                onInputChange={onInputChange}
                getOptionValue={(option) => option.id}
                getOptionLabel={(option) => option.name}
                loadOptions={loadOptions}
                onChange={onChange}
                placeholder="Seleccionar empresa"
            />
            
            <Popup
                open={isOpen}
                closeOnDocumentClick
                onClose={closeModal}
            >
                <div
                style = {{
                    padding: "20%",
                    border: "3px outset",
                    textAlign: "center",
                    width: "100%",
                    backgroundColor: "#FFFFFF"
                }}
                >
                    <span>
                        ¿Desea registrar la empresa?
                    </span>
                    <br/>
                    <div>
                        <button
                            style = {{
                                padding: "1% 3% 1% 3%",
                                margin: "5% 10% 5% 10%",
                                backgroundColor: "#B0F2C2"
                            }}
                            onClick = {saveItem} >
                            Si
                        </button>
                        <button
                            style = {{
                                padding: "1% 3% 1% 3%",
                                margin: "5% 10% 5% 10%",
                                backgroundColor: "#FCB7AF"
                            }}
                            onClick = {closeModal} >
                            No
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    );
};

export default DropdownPagination;
