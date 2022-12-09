import React, { useEffect, useState, useCallback } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';
const Form = () => {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();



    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeSubjcet = (e) => {
        setSubject(e.target.value);
    }

    const onSendData = useCallback ( () => {
        const data = {
            country,
            street,
            subject
        }

        tg.sendData(JSON.stringify(data))
    },[country, city, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])



    useEffect(() => {
        tg.MainButton.setParams({
            text:'send info'
        })
    },[])

    useEffect(() => {
        if(!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    },[country, city])




    return (
        <div className={'form'}>
            <h3>Enter information</h3>
            <input className={'input'} type="text" placeholder={'Country'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'City'}   value={city} onChange={onChangeCity}/>

            <select className={'select'}  value={subject} onChange={onChangeSubjcet}>
                <option value={'physical'}>1</option>
                <option value={'legal'}>2</option>
            </select>
        </div>
    );
};

export default Form;