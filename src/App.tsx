import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import bg from './assets/bg.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

const generateRandomNumbers = (count: number, min: number, max: number): number[] => {
  const randomNumbers: number[] = [];

  for (let i = 0; i < count; i++) {
    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

const get3Rows = () => [generateRandomNumbers(5, 1, 99), generateRandomNumbers(5, 1, 99), generateRandomNumbers(5, 1, 99)];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [step, setStep] = useState<'init' | 'numbers'>('numbers');
  const [randomNumbers, setRandomNumbers] = useState(get3Rows());

  const submit = () => {
    window.gtag('event', 'may_ios_engage_var5');
    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  if (step === 'numbers') {
    return (
      <>
        <div className={appSt.container}>
          <div className={appSt.textTitle}>
            <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
              Альфа Джекпот
            </Typography.TitleResponsive>
            <Typography.Text
              view="primary-medium"
              color="secondary"
              style={{ textDecoration: 'underline' }}
              onClick={() => {
                window.gtag('event', 'may_ios_what_is_var5');
                setStep('init');
              }}
            >
              👀 Что такое Альфа Джекпот?
            </Typography.Text>
          </div>

          <div className={appSt.wrap}>
            <div className={appSt.numbersContainer}>
              {randomNumbers[0].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: false })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>
            <div className={appSt.hr} />

            <div className={appSt.numbersContainer}>
              {randomNumbers[1].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: true })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>
            <div className={appSt.hr} />

            <div className={appSt.numbersContainer}>
              {randomNumbers[2].map((number, index) => (
                <div key={`${number}-${index}`} className={appSt.numberContaier({ selected: false })}>
                  <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="bold">
                    {number}
                  </Typography.TitleResponsive>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: '160px' }} />

        <div className={appSt.bottomBtn}>
          <ButtonMobile
            shape="rounded"
            disabled={loading}
            block
            view="secondary"
            onClick={() => {
              window.gtag('event', 'may_ios_combination_var5');
              setRandomNumbers(get3Rows());
            }}
          >
            Новая комбинация
          </ButtonMobile>
          <ButtonMobile
            shape="rounded"
            loading={loading}
            block
            view="primary"
            hint="Стоимость участия 200 миль"
            onClick={submit}
          >
            Участвовать
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
            Альфа Джекпот
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Участвуйте и выигрывайте!
          </Typography.Text>

          <img src={bg} height={170} width="100%" className={appSt.img} />
        </div>

        <Typography.Text view="primary-medium">Миллионы рублей - мечта или реальность?</Typography.Text>
        <Typography.Text view="primary-medium">
          Испытайте свою удачу, выбирайте счастливую комбинацию чисел и исполняйте самые заветные желания.
        </Typography.Text>

        <div className={appSt.row}>
          <CDNIcon name="glyph_ticket-star_m" />

          <Typography.Text view="primary-medium">Оплачивайте участие милями, а не рублями</Typography.Text>
        </div>
        <div className={appSt.row}>
          <CDNIcon name="glyph_ticket-star_m" />

          <Typography.Text view="primary-medium">Ваш кэшбэк — ваш ключ к миллионам</Typography.Text>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          shape="rounded"
          block
          view="primary"
          onClick={() => {
            window.gtag('event', 'may_ios_luck_var5');
            setStep('numbers');
          }}
        >
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="bold">
            Испытать удачу
          </Typography.TitleResponsive>
        </ButtonMobile>
      </div>
    </>
  );
};
