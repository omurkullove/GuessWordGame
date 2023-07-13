import React, { useEffect, useState } from 'react';

const App = () => {
   const [initialWords, setInitialWords] = useState([
      {
         name: 'Квантовая физика',
         id: 11,
         hint: 'Область науки, изучающая микромир и физические явления на уровне квантов',
      },
      {
         name: 'Нефрология',
         id: 12,
         hint: 'Медицинская специализация, изучающая болезни почек',
      },
      {
         name: 'Эпистемология',
         id: 13,
         hint: 'Философская дисциплина, исследующая природу и возможность познания',
      },
      {
         name: 'Синтезатор',
         id: 14,
         hint: 'Электронное устройство для создания и модификации звуков',
      },
      {
         name: 'Аквапланирование',
         id: 15,
         hint: 'Физический эффект, при котором твердое тело скользит по поверхности воды',
      },
      {
         name: 'Биоэтика',
         id: 16,
         hint: 'Область этики, занимающаяся нравственными вопросами, связанными с биологией и медициной',
      },
      {
         name: 'Экватор',
         id: 17,
         hint: 'Воображаемая линия, разделяющая Землю на северное и южное полушария',
      },
      {
         name: 'Полиглот',
         id: 18,
         hint: 'Человек, свободно владеющий несколькими языками',
      },
      {
         name: 'Антропоморфизм',
         id: 19,
         hint: 'Приписывание человеческих характеристик нечеловеческим существам или предметам',
      },
      {
         name: 'Мегалополис',
         id: 20,
         hint: 'Огромный город или столичный регион с высокой плотностью населения',
      },
      {
         name: 'Теорема Ферма',
         id: 21,
         hint: 'Математическое утверждение, сформулированное Пьером де Ферма',
      },
      {
         name: 'Киберпанк',
         id: 22,
         hint: 'Научно-фантастический жанр, описывающий будущее с высоким уровнем технологий и компьютеризации',
      },
      {
         name: 'Глобализация',
         id: 23,
         hint: 'Процесс экономической, политической и культурной интеграции различных стран мира',
      },
      {
         name: 'Параллелепипед',
         id: 24,
         hint: 'Геометрическое тело с шестью параллельными гранями',
      },
      {
         name: 'Электрокардиограмма',
         id: 25,
         hint: 'Графическое представление электрической активности сердца',
      },
      {
         name: 'Гипоталамус',
         id: 26,
         hint: 'Часть головного мозга, регулирующая множество жизненно важных функций организма',
      },
      {
         name: 'Диссоциация',
         id: 27,
         hint: 'Распад или разделение вещества или структуры на составные части',
      },
      {
         name: 'Конденсация',
         id: 28,
         hint: 'Переход вещества из газообразного состояния в жидкое',
      },
      {
         name: 'Интроспекция',
         id: 29,
         hint: 'Самонаблюдение или внутреннее осмысление собственных мыслей и чувств',
      },
      {
         name: 'Ортодоксия',
         id: 30,
         hint: 'Строгое следование принципам и учению какой-либо системы или религии',
      },
      {
         name: 'Геоинформатика',
         id: 31,
         hint: 'Наука о сборе, анализе и интерпретации географических данных с использованием компьютерных технологий',
      },
      {
         name: 'Фрактал',
         id: 32,
         hint: 'Геометрическая фигура или математическое множество, обладающее самоподобием на разных масштабах',
      },
      {
         name: 'Диссонанс',
         id: 33,
         hint: 'Неприятное звучание или несоответствие между звуками или аккордами',
      },
      {
         name: 'Хронометраж',
         id: 34,
         hint: 'Измерение продолжительности времени в кино, театре или музыке',
      },
      {
         name: 'Барокко',
         id: 35,
         hint: 'Художественный стиль, характеризующийся изобилием декоративных элементов и эмоциональной выразительностью',
      },
      {
         name: 'Идеология',
         id: 36,
         hint: 'Система идей, ценностей и политических убеждений, лежащая в основе какой-либо социальной или политической теории',
      },
      {
         name: 'Протон',
         id: 37,
         hint: 'Элементарная частица, положительно заряженная основной единицей электрического заряда',
      },
      {
         name: 'Астрофизика',
         id: 38,
         hint: 'Область физики, изучающая физические законы и явления во Вселенной',
      },
      {
         name: 'Метаморфоза',
         id: 39,
         hint: 'Радикальное преобразование или изменение формы, структуры или характера чего-либо',
      },
      {
         name: 'Инкапсуляция',
         id: 40,
         hint: 'Процесс упаковки данных и методы их обработки внутри объекта программирования',
      },
      {
         name: 'Рефлексия',
         id: 41,
         hint: 'Анализ или обдумывание собственных мыслей, впечатлений и поведения',
      },
      {
         name: 'Когнитивный диссонанс',
         id: 42,
         hint: 'Психологическое состояние, возникающее при несоответствии между убеждениями и действиями человека',
      },
      {
         name: 'Монокультура',
         id: 43,
         hint: 'Агрокультура, основанная на выращивании одного вида растений',
      },
      {
         name: 'Эмпиризм',
         id: 44,
         hint: 'Философское учение, согласно которому источником знания являются наблюдение и опыт',
      },
      {
         name: 'Аллегория',
         id: 45,
         hint: 'Образное выражение мысли или идеи, в котором абстрактные понятия представлены через конкретные образы',
      },
      {
         name: 'Абстракционизм',
         id: 46,
         hint: 'Художественное направление, стремящееся к выражению идей и эмоций через абстрактные формы и цвета',
      },
      {
         name: 'Консерватория',
         id: 47,
         hint: 'Учебное заведение для подготовки музыкантов и исполнителей',
      },
      {
         name: 'Экзистенциализм',
         id: 48,
         hint: 'Философское течение, утверждающее первичность существования и индивидуального опыта',
      },
      {
         name: 'Киноэпопея',
         id: 49,
         hint: 'Широкомасштабный фильм или серия фильмов, охватывающих большой период времени и множество персонажей',
      },
      {
         name: 'Онтология',
         id: 50,
         hint: 'Философская дисциплина, изучающая природу существования и реальности',
      },
   ]);

   const [randomIndex, setRandomIndex] = useState();

   const [currentWord, setCurrentWord] = useState();

   const [isHint, setIsHint] = useState(false);

   const [input, setInput] = useState('');

   const [endGame, setEndGame] = useState(false);

   const [isFinish, setIsFinish] = useState(false);

   const [afterWord, setAfterWord] = useState([
      {
         letter: 'П',
         isActive: false,
      },
      {
         letter: 'О',
         isActive: false,
      },
      {
         letter: 'Р',
         isActive: false,
      },
      {
         letter: 'А',
         isActive: false,
      },
      {
         letter: 'Ж',
         isActive: false,
      },
      {
         letter: 'Е',
         isActive: false,
      },
      {
         letter: 'Н',
         isActive: false,
      },
      {
         letter: 'И',
         isActive: false,
      },
      {
         letter: 'Е',
         isActive: false,
      },
   ]);

   const hanldeStart = () => {
      setCurrentWord(initialWords[randomIndex]);
      setEndGame(false);
      setCount(0);
      setIsFinish(false);
      setAfterWord((prev) => {
         const newAfterWords = prev.map((item) => ({
            letter: item.letter,
            isActive: false,
         }));
         return newAfterWords;
      });
      setCurrentWord((prev) => ({
         ...prev,
         name: prev.name.split('').map((letter) => ({
            letter,
            isActive: false,
         })),
      }));
   };

   const [count, setCount] = useState(0);

   const handleGuess = () => {
      if (currentWord) {
         const boolean = currentWord.name.find(
            (item) => item.letter.toLowerCase() === input.toLowerCase()
         );

         if (boolean) {
            setCurrentWord((prev) => ({
               ...prev,
               name: prev.name.map((item) => {
                  if (item.letter.toLowerCase() === input.toLowerCase()) {
                     return {
                        ...item,
                        isActive: true,
                     };
                  }
                  return item;
               }),
            }));
         } else {
            setCount((prev) => prev + 1);
            setAfterWord((prev) => [...prev, (prev[count].isActive = true)]);
         }
      }

      setInput('');
   };
   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         handleGuess();
      }
   };

   useEffect(() => {
      const random = Math.random() * initialWords.length;
      setRandomIndex(Math.trunc(random));
   }, [currentWord]);

   useEffect(() => {
      if (count === 9) {
         setEndGame(true);
         setCurrentWord();
      }
   }, [count]);

   useEffect(() => {
      const finish = currentWord?.name.map((letter, index) => {
         if (letter.isActive === true) {
            return true;
         } else {
            return false;
         }
      });

      const isAllTrue = finish?.every((item) => item === true);

      if (isAllTrue) {
         setIsFinish(true);
      }
      console.log(isAllTrue);
   }, [currentWord]);

   return (
      <div className='main'>
         <p className='p'>Добро пожаловать!</p>
         <button className='button start' onClick={hanldeStart}>
            Начать
         </button>
         <div>
            <label htmlFor='word'>
               <div className='wordBlock'>
                  {currentWord?.name.map((letter, index) => (
                     <div className='word' key={index}>
                        <p style={{ color: letter?.isActive ? 'white' : 'black' }}>
                           {letter.letter}
                        </p>
                     </div>
                  ))}
               </div>
            </label>
         </div>
         <input
            placeholder='Напишите букву сюда'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={1}
            onKeyDown={handleKeyPress}
         />
         <div>
            <button className='button' onClick={handleGuess} disabled={!currentWord}>
               Отгадать
            </button>
            <button onClick={() => setIsHint(!isHint)} className='button' disabled={!currentWord}>
               Получить подсказку
            </button>
         </div>
         {isHint ? <p>{currentWord?.hint}</p> : null}
         <div style={{ display: 'flex', letterSpacing: '20px' }}>
            {afterWord.map((item) => (
               <p
                  style={{
                     color: item.isActive ? 'red' : 'black',
                  }}
                  className='afterWord'
               >
                  {item.letter}
               </p>
            ))}
         </div>
         <div>
            {endGame ? (
               <p style={{ fontSize: '20px', fontWeight: '900' }}>
                  Вы проиграли.Нажмите кнопку "Начать".
               </p>
            ) : null}
            {isFinish ? (
               <p style={{ fontSize: '20px', fontWeight: '900' }}>
                  Поздравляю вы выиграли!!!
                  <br /> Нажмите кнопку "Начать" чтобы начать сначала.
               </p>
            ) : null}
         </div>
      </div>
   );
};

export default App;
