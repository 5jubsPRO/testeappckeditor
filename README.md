# Projeto de Teste do CKEditor5

Esse projeto, consite em uma aplicação de TESTE, para utilização do **CKEditor** nos projetos que usam React e Typescript.

## Para utilizar:

Clone este repositório, e rode o comando:

`yarn intall`

Após, rode com:

`yarn start`

---

## Composição:

O projeto foi "construído", utilizando:
- Create React App, como pode ser visto em [CRA-README.md](CRA-README.md), e todas as dependências lá descritas.
- O Build do CKEditor, fornecido no site do CKEditor, como pode ser visto em [CKEditor.md](CKEditor.md).
- React
- Typescript

## Integração do Componente ao Pojeto do Create React App:

Após a criação do Build do CKEditor, e do Create React App, instalei as dependências necessárias para rodar o Componente.

Rodei o comando:

`yarn add @ckeditor/ckeditor5-react`

para adicionar dependência "base" do componente.

Depois, extraí o ZIP, que baixei do site - **Online Builder** - do CKEditor, e adicionei, conforme descrito na [Documentação do CKEditor](https://bit.ly/3Ozzs7d), ao projeto, de forma que a pasta do CKEditor ficasse na Raiz do projeto:

```
├── ckeditor5
│   ├── build
│   ├── sample
│   ├── src
│   ├── ...
│   ├── package.json
│   └── webpack.config.js
├── node_modules
├── public
├── src
├── ...
└── package.json
```

Então Rodei o comando:

`yarn add file:./ckeditor`

que referencia a pasta, como sendo a dependência, mas ainda assim precisei criar o arquivo:

`typings.d.ts`

para informar o caminho de declaração do módulo, na hora de importá-lo nas classes.


Por fim rodei o comando:

`yarn add @ckeditor/ckeditor5-build-classic`

para adicionar as dependências que a pasta do CKEditor, utiliza.

---

## Consumindo o Componente:

Basicamente, importei as referências do CKEditor na classe App.tsx:

```
    import { CKEditor } from '@ckeditor/ckeditor5-react';
    import Editor from 'ckeditor5-custom-build';
```

Criei uma variável, contendo as configurações do Componente:

```
    const editorConfig = {
    toolbar: {
      items: [
        'undo',
        .....
        ],
      shouldNotGroupWhenFull: true
    },
    language: 'pt-br',
    image: {
      toolbar: [
        ...
        ]
    },
    table: {
      contentToolbar: [
        ...
        ]
      }
    };
```

E por fim, instanciei o Componente dentro do App.tsx:

```
    function App() {
        const [addTexto, setaValor] = useState('');
        ...
        return (
            ...
            <CKEditor
                editor={ Editor }
                config={ editorConfig }
                data={ addTexto }
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor pronto para uso!', editor );
                    setaFocoNoEditor( editor );
                } }
                onChange={ ( event, editor ) => {
                    alteraTexto(event, editor);
                    console.log(editor.data.get());
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Editor desfocado.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Editor Focado.', editor );
                } }
            />
            ...
        );
    }

    export default App;
```

Confira a rotina completa no arquivo [App.tsx](/src/App.tsx).

---

## Licensa

[CC0 - Public Domain (Domínio Público)](https://bit.ly/3sa1kak)