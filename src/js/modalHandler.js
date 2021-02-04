const modalWindowElem = document.getElementById('modal-window');

const modalHandler = e => {

    const formHandler = (event, formData) =>
    {
        const item = event.currentTarget.name;
        if (formData.hasOwnProperty(item))
        {
            formData[item] = event.currentTarget.value;
        }
    }

    const checkData = inputElem => {
        return inputElem.value.trim() !== '';
    }

    const sendData = (e, data, ...elementsToCheck) => {
        e.preventDefault();

        let sendDecision = !(elementsToCheck.map( item => checkData(item)).includes(false));

        if (sendDecision)
        {
            for (const formItem in data) {
                if (data.hasOwnProperty(formItem)) {
                    if (data[formItem].trim() !== '')
                    {
                        console.log(`${formItem}: ${data[formItem]}`);
                    }
                }
            }
        }
        else
        {
            confirm('Заполните все поля');
            throw new Error('Заполните поля!');
        }
    }

    const closeModal = e => {
        document.getElementById('modal-name').removeEventListener('input', e => formHandler(e, form));
        document.getElementById('modal-tel').removeEventListener('input', e => formHandler(e, form));
        document.getElementById('modal-comment').removeEventListener('input', e => formHandler(e, form));
        document.getElementById('modal-submit').removeEventListener('click', e => sendData(e, form));

        document.getElementById('close-modal').removeEventListener('click', closeModal);
        modalWindowElem.removeEventListener('click', e => {
            if (e.currentTarget === e.target) closeModal()
        });

        document.getElementById('modal-comment').style.display === 'block' ? 'none' : 'none';

        modalWindowElem.style.display = 'none';
    }

    const form = {name: '', tel: '', question: ''};
    let modalNameElem, modalTelElem, modalQuestionElem;

    modalWindowElem.style.display = 'block';

    const modalType = parseInt(e.currentTarget.dataset.modaltype);

    // Тип модалки. 1 - "Узнать цену" (2 инпута), 2 - "Задать вопрос" (3 инпута)
    if (modalType === 2)
    {
        // Поле для вопроса становится видимым.
        document.getElementById('modal-comment').style.display = 'block';
        modalQuestionElem = document.getElementById('modal-comment');
        modalQuestionElem.addEventListener('input', e => formHandler(e, form));
        document.getElementById('modal-submit').value = 'задать вопрос';
    }

    modalNameElem = document.getElementById('modal-name');
    modalTelElem = document.getElementById('modal-tel');

    modalNameElem.addEventListener('input', e => formHandler(e, form));
    modalTelElem.addEventListener('input', e => formHandler(e, form));

    document.getElementById('modal-submit').addEventListener('click', e => {
        if (modalType === 1)
        {
            sendData(e, form, modalNameElem, modalTelElem);
        }
        else
        {
            sendData(e, form, modalNameElem, modalTelElem, modalQuestionElem);
        }
    });

    document.getElementById('close-modal').addEventListener('click', closeModal);
    modalWindowElem.addEventListener('click', e => {
        if (e.currentTarget === e.target) closeModal()
    });
}

export default modalHandler;