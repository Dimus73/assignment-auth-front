import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Registry.css'
import ModalWindow from "../UI/Modal/ModalWindow";
import WindowsSection from "./UI/WindowsSection";
import InputElement from "./UI/InputElement";
import {useFetching} from "../Hooks/useFetching";
import AuthServices from "../API/authServices";

const Registry = () => {
	const user = useSelector (state => state.user)
	const dispatch = useDispatch() ;

	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [modalMessage, setModalMessage] = useState('');
	const [modalTitle, setModalTitle] = useState('Error')

	const [registerAction, registerActionMessageError, registerActionClearMessageError] =
		useFetching (async (email, pw) => {
			const response = await AuthServices.registration( email, pw );
			setModalTitle('Message:')
			setModalMessage('New user registered successfully');
			setEmail('');
			setPassword1('');
			setPassword2('')
		})

	useEffect(() => {
		setModalMessage(
			registerActionMessageError
		)
	},[registerActionMessageError])


	const addUser = async (e) => {
		e.preventDefault();

		if (password1 !== password2) {
			setModalMessage ('Password fields must match')
			return
		}
		await registerAction(email, password1);
	}


	const clearAllMessages = () => {
		if (registerActionMessageError) registerActionClearMessageError();
		setModalMessage('');
		setModalTitle('Error')
	}

	return (
		<>
			{modalMessage &&
				<ModalWindow title={modalTitle} body={modalMessage} closeAction={clearAllMessages}/>}
			<WindowsSection title={'Registry new user'} action={addUser} buttonName={'Registry'}>
				<InputElement placeholder={'Email'} type={'text'} element={email} changeElement={setEmail}/>
				<InputElement placeholder={'Password 1'} type={'password'} element={password1} changeElement={setPassword1}/>
				<InputElement placeholder={'Password 2'} type={'password'} element={password2} changeElement={setPassword2}/>
			</WindowsSection>
		</>
	)
}

export default Registry;