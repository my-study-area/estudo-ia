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


Comandos:
```bash
# cria o arquivo GEMINI.md
/init 

# sincroniza p conhecimento da IA com os dados atualizados
/memory refresh

# gerencia o histórico de conversas
/chat list
```

Shortcuts:
```
ctrl + l: limpa a tela, semelhante ao bash.
```
