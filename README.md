# bemponent


Обертка над React.Component для удобной работы в рамках методологии bemponent для React.

### Установка

`npm i bemponent`

## Quick start

Компоненты bemponent являются полностью **совместимыми** с классическими React компонентами, что дает возможность смешивать классический react код с кодом в терминах методологии bemponent

### Пример использования(временно, пока нет нормальной доки)

[Открыть Демо](https://codesandbox.io/s/ykqpnjz79v) на Codesandbox


**index.js:**

```jsx
import React from 'react';
import Button from './Button.js';

ReactDOM.render(<div>
	<Button
		theme="primary"
		size="m"
	/>Fisrt</Button>
	<Button
		theme="secondary"
		size="s"
	/>Fisrt</Button>
	</div>,
	root
);
```

**Button.js:**
```jsx
import React from 'react';
import Component from 'bemponent';
import {merge} from 'lodash';

class Button extends Component {
    getModDeps() {
        return [
            ...super.getModDeps(),
            'theme',
            'size'
        ]
    }

    render() {
		const {children} = this.props;
        return (
	        <button
	          className={this.genClassName()}
	        />
	        {children}
	        </button>
        );
    }
}

export default Button;
```

**Button.css:**
```css
.Button {
	font-family: inherit;
	text-align: center;
}
.Button_Size_L {
  line-height:  36px;
  height:  36px;
}
.Button_Size_M {
  line-height:  36px;
  height:  36px;
}
.Button_Theme_Primary {
  backgorund-color: red;
}
.Button_Theme_Secondary {
  backgorund-color: grey;
}
```


### Road map по написанию документации
1. Краткое описание технологии
2. Установка
3. Быстрый старт
4. Методология
	* Почему bemponent?
	* Компонент
	* Компонент-Элемент(????)
	* Модификатор
	* Компонент с динамическим состоянием
	* Компонент без динамического состояния


