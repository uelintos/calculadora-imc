import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

function Form() {
        const [imc, setImc] = useState(null);
        const{
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();


        const onSubmit = (data) => {
                const heightInMeters = data.height / 100;
                const imcValue = (data.weight / (heightInMeters * heightInMeters)).toFixed(2);
                setImc(imcValue);
        };

        const name = watch('name');
        const watchedHeight = watch('height');
        const watchedWeight = watch('weight');

        useEffect(() => {
            // se apagar altura ou peso, limpa o IMC exibido
            if (!watchedHeight || !watchedWeight) {
                setImc(null);
            }
        }, [watchedHeight, watchedWeight]);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='container'>
                <header className="container-header">
                <h1 className="container-header--title">Calculadora de IMC</h1>
                </header>
                <label className='form-text' htmlFor='name' >Nome:</label>
                <input 
                {...register("name", { required: "Nome é obrigatório" })}
                id='name' 
                type="text" 
                placeholder='Nome'
                className='form-input'
                />

                <label className='form-text' htmlFor='height' >Altura:</label>
                <input 
                 {...register("height", { 
                        required: "Altura é obrigatória",
                        min: { value: 1, message: "Altura deve ser maior que 0" },
                    })}
                id='height' 
                type="number" 
                placeholder='Altura em cm'
                className='form-input'
                step="1"
                onKeyDown={(e) => {
                    if (e.key === '.' || e.key === ',') {
                        e.preventDefault();
                }
                }}
                />

                <label className='form-text' htmlFor='weight'>Peso:</label>
                <input
                {...register("weight", { 
                        required: "Peso é obrigatório",
                        min: { value: 1, message: "Peso deve ser maior que 0" },
                    })
                }
                id="weight" 
                type="number" 
                placeholder='Peso'
                className='form-input'
                onKeyDown={(e) => {
                    if (e.key === '.' || e.key === ',') {
                        e.preventDefault();
                }
                }}
                />

                <button className='form-btn' type='submit'>Calcular IMC</button>
                {imc && <p className='form-result'>Olá { name } Seu IMC é: {imc}</p>}
            </div>
        </form>
    )
    
}

export default Form;