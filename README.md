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

Comandos:
```bash
# cria o arquivo GEMINI.md
/init 

# sincroniza p conhecimento da IA com os dados atualizados
/memory refresh

# gerencia o histporico de conversas
/chat list
```

Shortcuts:
```
ctrl + l: limpa a tela, semelhante ao bash.
```
