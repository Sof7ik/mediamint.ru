const modalWindowElem = document.getElementById('modal-window');

function modalHandler (e)
{
    function formHandler (event, formData)
    {
        const item = event.currentTarget.name;
        if (formData.hasOwnProperty(item))
        {
            formData[item] = event.currentTarget.value;
        }
    }

    function checkData (inputElem)
    {
        return inputElem.value.trim() !== '';
    }

    function sendData (e, data, ...elementsToCheck)
    {
        e.preventDefault();

        let sendDecision = !( elementsToCheck.map( function (item) { checkData(item).includes(false) } ) );

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

    function closeModal (e) {
        document.getElementById('modal-name').removeEventListener('input', function (e) { formHandler(e, form)});
        document.getElementById('modal-tel').removeEventListener('input', function (e) { formHandler(e, form)});
        document.getElementById('modal-comment').removeEventListener('input', function (e) { formHandler(e, form)});
        document.getElementById('modal-submit').removeEventListener('click', function (e) { sendData(e, form)});

        document.getElementById('close-modal').removeEventListener('click', closeModal);
        modalWindowElem.removeEventListener('click', function (e) {
            if (e.currentTarget === e.target) closeModal()
        });

        document.getElementById('modal-comment').style.display === 'block' ? 'none' : 'none';

        modalWindowElem.style.display = 'none';

        document.body.style.overflow = 'auto';
    }

    const form = {name: '', tel: '', question: ''};
    let modalNameElem, modalTelElem, modalQuestionElem;

    modalWindowElem.style.display = 'block';

    const modalType = parseInt(e.currentTarget.dataset.modaltype);

    // Тип модалки. 1 - "Узнать цену" (2 инпута), 2 - "Задать вопрос" (3 инпута)
    if(modalType === 1)
    {
        document.getElementById('modal-comment').style.display = 'none';
        //document.getElementById('modal-submit').value = 'отправить запрос';
        document.getElementById('modal-submit').textContent = 'отправить запрос';
    }
    else if(modalType === 2)
    {
        // Поле для вопроса становится видимым.
        document.getElementById('modal-comment').style.display = 'block';
        modalQuestionElem = document.getElementById('modal-comment');
        modalQuestionElem.addEventListener('input', function (e) { formHandler(e, form) } );
        //document.getElementById('modal-submit').value = 'задать вопрос';
        document.getElementById('modal-submit').textContent = 'задать вопрос';
    }

    document.body.style.overflow = 'hidden';

    modalNameElem = document.getElementById('modal-name');
    modalTelElem = document.getElementById('modal-tel');

    modalNameElem.addEventListener('input', function (e) { formHandler(e, form)});
    modalTelElem.addEventListener('input', function (e) { formHandler(e, form)});

    document.getElementById('modal-submit').addEventListener('click', function (e) {
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
    modalWindowElem.addEventListener('click', function (e) {
        if (e.currentTarget === e.target) closeModal()
    });
}

export default modalHandler;