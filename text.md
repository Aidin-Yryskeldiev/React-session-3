// import style from "./Modal.module.css";
// import { useState } from "react";
// const Modal = () => {
// const [show, setShow] = useState(false);
// console.log(show);
// const click = () => {
// setShow((old) => !old);
// };
// return (
// <div>
// <div className={style.button_flex}>
// <button className={style.button_modal} onClick={click}>
// Add Note
// </button>
// </div>
// <div className={style.flex_box}>
// {show && (
// <div className={style.modal}>
// <div className={style.button_flex}>
// <button className={style.button_close} onClick={click}>
// X
// </button>
// </div>
// <h1 className={style.text_note}>Add Note</h1>
// <p className={style.text}>Write note:</p>
// <div className={style.message}>
// <textarea cols="30" rows="7" placeholder="Note"></textarea>
// </div>
// <p className={style.text}>Choose a color</p>
// <div className={style.select_flex}>
// <select>
// <option>Yellow</option>
// <option>Blue</option>
// <option>Red</option>
// <option>Purple</option>
// </select>
// </div>
// <div className={style.message}>
// <button className={style.button_save}>Save</button>
// </div>
// </div>
// )}
// </div>
// </div>
// );
// };

// export default Modal;

<!-- !!!!!!!!!!!!!!!!!!!!! -->

import style from "./MiniTodo.module.css";
import { useState } from "react";

const MiniTodo = () => {
const [show, setShow] = useState(false);
const [noteText, setNoteText] = useState(""); // Состояние для текста заметки
const [selectedColor, setSelectedColor] = useState("Yellow"); // Состояние для выбранного цвета
const [savedNote, setSavedNote] = useState(null); // Состояние для отображения сохраненной заметки
const [isEditing, setIsEditing] = useState(false); // Состояние для отображения модального окна редактирования

    const click = () => {
    	setShow((old) => !old);
    };

    const handleTextChange = (event) => {
    	setNoteText(event.target.value); // Обновляем текст заметки при вводе
    };

    const handleColorChange = (event) => {
    	setSelectedColor(event.target.value); // Обновляем выб	ранный цвет
    };

    const handleSave = () => {
    	// Обработчик сохранения
    	document.body.style.backgroundColor = selectedColor; // Устанавливаем фоновый цвет страницы
    	setSavedNote(noteText); // Сохраняем текст заметки для отображения
    	setNoteText(""); // Очищаем поле ввода
    	setIsEditing(false); // Закрываем модальное окно редактирования после сохранения
    };

    const handleEdit = () => {
    	setIsEditing(true); // Показываем модальное окно редактирования
    	setNoteText(savedNote); // Заполняем поле ввода сохраненным текстом
    };

    const handleDelete = () => {
    	setSavedNote(null); // Удаляем сохраненную заметку
    };

    return (
    	<div>
    		<div className={style.button_flex}>
    			<button className={style.button_modal} onClick={click}>
    				Add Note
    			</button>
    		</div>
    		<div className={style.flex_box}>
    			{show && !isEditing && (
    				<div className={style.modal}>
    					<div className={style.button_flex}>
    						<button className={style.button_close} onClick={click}>
    							X
    						</button>
    					</div>
    					<h1 className={style.text_note}>Add Note</h1>
    					<p className={style.text}>Write note:</p>
    					<div className={style.message}>
    						<textarea
    							cols="30"
    							rows="7"
    							placeholder="Note"
    							value={noteText}
    							onChange={handleTextChange} // Обработчик изменения текста
    						></textarea>
    					</div>
    					<p className={style.text}>Choose a color</p>
    					<div className={style.select_flex}>
    						<select value={selectedColor} onChange={handleColorChange}>
    							{" "}
    							{/* Установка выбранного цвета */}
    							<option value="Yellow">Yellow</option>
    							<option value="Blue">Blue</option>
    							<option value="Red">Red</option>
    							<option value="Purple">Purple</option>
    						</select>
    					</div>
    					<div className={style.message}>
    						<button className={style.button_save} onClick={handleSave}>
    							Save
    						</button>{" "}
    						{/* Обработчик сохранения */}
    					</div>
    				</div>
    			)}
    			{savedNote && !isEditing && (
    				<div className={style.saved_note}>
    					<h2>Saved Note:</h2>
    					<p>{savedNote}</p>
    					<div className={style.button_flex}>
    						<button className={style.button_edit} onClick={handleEdit}>
    							Edit
    						</button>
    						<button className={style.button_delete} onClick={handleDelete}>
    							Delete
    						</button>
    					</div>
    				</div>
    			)}
    			{isEditing && (
    				<div className={style.modal}>
    					<div className={style.button_flex}>
    						<button
    							className={style.button_close}
    							onClick={() => setIsEditing(false)}>
    							X
    						</button>
    					</div>
    					<h1 className={style.text_note}>Edit Note</h1>
    					<p className={style.text}>Write note:</p>
    					<div className={style.message}>
    						<textarea
    							cols="30"
    							rows="7"
    							placeholder="Note"
    							value={noteText}
    							onChange={handleTextChange} // Обработчик изменения текста
    						></textarea>
    					</div>
    					<div className={style.message}>
    						<button className={style.button_save} onClick={handleSave}>
    							Save
    						</button>{" "}
    						{/* Обработчик сохранения */}
    					</div>
    				</div>
    			)}
    		</div>
    	</div>
    );

};

export default MiniTodo;
