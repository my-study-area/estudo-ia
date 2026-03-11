# estudo-ia

## Gemini CLI Tutorial
Link: https://www.youtube.com/playlist?list=PL4cUxeGkcC9h-AKdBSCRpqjD3y6T7Xgrb

Documentação: https://geminicli.com/docs/get-started/

Projeto utilizado no tutorial: https://github.com/iamshaunjp/gemini-cli-course

- arquivo GEMINI.md: pode ser criado na raiz do projeto, subdiretórios ou de forma global na pasta `/home/usuario/.gemini`.
- prompt para alteração de código:
```
Na página inicial, existem atualmente 3 cartões de recursos (feature cards) e 3 cartões de combo (combo cards). Você pode extrair os modelos/estilos desses 2 tipos de cartões em componentes de UI reutilizáveis chamados FeatureCard e ComboCard? Eles devem ser criados no diretório ./app/components. Em seguida, atualize a página inicial para usar esses componentes de cartão nos locais onde forem necessários.
```

Para definir um contexto ao enviar os prompts podemos utilizar o caractere `@` seguido do nome do arquivo, exemplo:
```
make the p text bigger @curso-gemini-cli-tutorial/gemini-cli-course/app/pages/index.vue 
```

```
@curso-gemini-cli-tutorial/gemini-cli-course/app/pages/create.vue Can you update the tags input field,     
to show a pill of the tag below the input whenever a user adds a comma. This should also clear the         
input field so a user can easily add another tag. Users should be able to delete the tag by clicking on    
a cross icon on the tag itself. Do not allow multiple tags. Users should be allowed to add a max of 5      
tags in total. 
```

```
Can you update the tags input field, to show a pill of the tag below the input whenever a user adds a comma. This should also clear the input field so a user can easily add another tag. Users should be able to delete the tag by clicking on a cross icon on the tag itself. Do not allow multiple tags. Users should be allowed to add a max of 5 tags in total. Please style the pill to look like the pill from the following img @pill.png
```

`/setting` e depois procure por `Hide Context Window Percentage` e altere para `false`. Isso permite a visualização da porcentagem de uso do contexto. 
Utilize o comando `/compress` para diminuir a porcentagem de uso.

**AI Studio Google**    
https://aistudio.google.com/



**Custom commands**    
Crie o arquivo `.gemini/commands/component.toml` com o seguinte conteúdo:
```
description = 'Creates a new UI component and test file'

prompt = '''

Before doing anything, run a shell command to see if there's any uncommitted, unstaged or untracked changes on the current branch. If there are uncommited, unstaged or untracked changes, abort this process and tell the user. DO NOT GO ANY FURTHER.

You will be making a new Vue component for the nuxt app as described here - {{args}}.

Your job is to:

1. Derive a safe branch name based on that component description. The format of the branch should be: "component/<slug>", where the <slug> should be lowercase letters, kebab-case, and relatively short but descriptive.
2. Show the user the branch name you have chosen, and the git command you intend to run (e.g. git switch -c component/avatar).
3. Run a shell command to switch to the new branch. If there's uncommitted changes: tell the user, abort the process and do NOT continue.
4. Create a new test file for the component in the ./test/nuxt directory and write a small suite of meaningful tests based on the expected behaviour of the new component. DO NOT RUN THE TESTS YET.
5. Make the new component in the ./app/components directory. The name of the component can be derived from the component description and should be CamelCase. Keep file names consistant with existing conventions.
6. When the component is created, run the tests for the component to make sure they all pass. If some fail, fix the component and re-run the tests until they all pass.
7. Once everything passes, render examples of the new component in the /preview page.
8. Briefly summarize what you have done to the user.
```

Logo após criar o comando é necessário fechar e abrir o cli novamente com o comando `/quit` e depois `gemini`.

Exemplo de uso:
```
/component A circular Avatar component, which takes in an initial prop and a bgColor prop (which should be limited to a few color choices)
```


**Executando comandos shell no gemini**    
- `!`: entra no mode shell
- `ESC`> sai do modo shell
- `ctrl + f`: intergit com o prompt, por exemplo, quando um comando necessita de uma interação/confirmação de um comando para finalizar um programa, sair, acessar uma ajuda e etc.
- `npm run test`: para executar este comando no shell do gemini num diretório interno dentro do projeto, deve-se usar o seguinte comando:
```bash
npm run test --prefix curso-gemini-cli-tutorial/gemini-cli-course/
```

Crie o arquivo `.gemini/commands/commit-message.toml` com o seguinte conteúdo:

    description = "Create a commit message based on staged changes"
    prompt = '''

    Generate a commit message, listing & summarizing the main changes, based on the following git diff:

    ```diff
    !{git diff --staged}

    ```

    Use emojis for types of changes:

    * for style changes use 🎨
    * for bug fixes use 🐛
    * for new features use 🐣
    * for docs use 📋

    '''
> O comando customizado acima, interage com o seu shell para utilizar a saída como contexto para enviar para o Gemini. Após a execução do comando utilize `/copy` para enviar ao ctrl+c a mensagem gerada de IA.


**Informações sobre MCP**    
https://context7.com/



**Nanobanana**    
https://context7.com/docs/resources/all-clients#gemini-cli

Crie um arquivo chamado `.env` e adicione a sua key conforme o exemplo:
```
NANOBANANA_GEMINI_API_KEY=ABC123
```

```
/generate I need 3 images for the food combinations on the homepage: one for cheese and marmite, one for crisps and chocolate, and one for strawberries and pepper
```

```
can you add the three new images to the combo cards on the homepage?
```

Comandos:
```bash
# cria o arquivo GEMINI.md
/init 

# sincroniza p conhecimento da IA com os dados atualizados
/memory refresh

# gerencia o histórico de conversas
/chat list

# copia um texto gerado por um comando, exemplo commit-message criado acima
/copy
```

Shortcuts:
```
ctrl + l: limpa a tela, semelhante ao bash.
```
