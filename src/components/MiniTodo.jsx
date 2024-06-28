import style from "./MiniTodo.module.css";
import { useState } from "react";

const MiniTodo = () => {
	const [show, setShow] = useState(false);
	const [noteText, setNoteText] = useState("");
	const [selectedColor, setSelectedColor] = useState("Yellow");
	const [savedNote, setSavedNote] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	const click = () => {
		setShow((old) => !old);
	};

	const handleTextChange = (event) => {
		setNoteText(event.target.value);
	};

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value);
	};

	const handleSave = () => {
		document.body.style.backgroundColor = selectedColor;
		setSavedNote(noteText);
		setNoteText("");
		setIsEditing(false);
	};

	const handleEdit = () => {
		setIsEditing(true);
		setNoteText(savedNote);
	};

	const handleDelete = () => {
		setSavedNote(null);
	};

	return (
		<div>
			<h1 className={style.text_saved}>Saved Note:</h1>
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
								onChange={handleTextChange}></textarea>
						</div>
						<p className={style.text}>Choose a color</p>
						<div className={style.select_flex}>
							<select value={selectedColor} onChange={handleColorChange}>
								{" "}
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
						</div>
					</div>
				)}
				{savedNote && !isEditing && (
					<div className={style.saved_note}>
						<p className={style.save_note}>{savedNote}</p>
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
								onChange={handleTextChange}></textarea>
						</div>
						<div className={style.message}>
							<button className={style.button_save} onClick={handleSave}>
								Save
							</button>{" "}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MiniTodo;
