import React from 'react';

export class KeyboardLayout extends React.Component {

  render() {
    return (
      <div className="kbLayoutMain">
        <span className="kbTitle">
          Раскладка клавиатуры
        </span>
        <div className="kbLayoutBtns">
          <div className="kbBtn" data-selected="">
            <img className='kbFlag' src="ru.svg" alt="ru" />
          </div>
          <div className="kbBtn">
            <img className='kbFlag' src="us.svg" alt="us" />
          </div>
        </div>
        <div className="kbHelper">
          <span className="kbCaption">
            *Для смены раскладки ввода языка нажмите комбинацию клавиш
          </span>
          <img className='kbAltShift' src="alt_shift.svg" alt="alt+shift" />
        </div>
      </div>
    );
  }
}
