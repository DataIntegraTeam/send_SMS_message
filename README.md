# send_SMS_message
ENVIE UMA MENSAGEM SMS (ZENVIA)

## Limitações de SMS

### Comprimento do SMS:
Um SMS tem um comprimento máximo de 140 bytes, que pode ser usado com a codificação padrão, que suporta 160 caracteres (7 bits cada), ou usando uma codificação unicode, que suporta 70 caracteres (16 bits cada).

### Suporte de personagem:
A codificação padrão suporta cerca de 110 caracteres diferentes, enquanto a codificação unicode suporta cerca de 65.500 caracteres.
Aqui estão alguns exemplos de caracteres que são suportados apenas pela codificação unicode:
`çÇáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãõñäëïöüÿÄËÏÖÜÃÕÑâêîôûÂÊÎÔÛºª°|`

### Seleção de codificação:
Por padrão, nossa API seleciona automaticamente a codificação SMS com base no conteúdo da mensagem. No entanto, também é possível impor um `encoding` `strategy`. Mais detalhes podem ser encontrados na seção Texto SMS .

### SMS concatenado:
Para superar a limitação de tamanho do SMS, os fabricantes de celulares desenvolveram um recurso chamado `concatenated SMS`.
Isso permite que uma mensagem longa seja dividida em várias mensagens SMS para entrega, que são reunidas novamente pelo aplicativo de SMS do celular.

Portanto, quando uma mensagem tiver mais de 160 caracteres na codificação padrão ou 70 caracteres na codificação unicode, esse recurso será aplicado automaticamente.

Coisas importantes a ter em mente:

- Mensagens mais longas significam mais custo, porque na verdade são várias   mensagens.
- Para identificar cada parte da mensagem, alguns bytes são usados ​​como cabeçalho nesse recurso, de modo que cada parte da mensagem é menor que uma única mensagem curta: até 152 caracteres na codificação padrão e até 66 caracteres na codificação unicode. E o ponto de corte é sempre um espaço, então algumas peças podem ser menores que isso.
- Nem todas as operadoras suportam esse recurso. As maiores operadoras o apoiam, a saber: Vivo, Claro, Tim e Oi.
- Espaços duplos e tabulações sempre serão substituídos por um único espaço.
- Para enviar mensagens longas pode ser necessário entrar em contato com nossa equipe de atendimento e solicitar que esse recurso seja ativado em sua conta.
- O comprimento máximo suportado atualmente é de 1520 caracteres

## Remetente e destinatário de SMS
Quando você envia uma mensagem para um contato usando o canal SMS:

- Destinatário: o número de telefone completo (incluindo o código do país) do contato.
- Remetente: o alias da conta SMS conectada na plataforma Zenvia .
Quando você recebe uma mensagem de um contato, o remetente e o destinatário são invertidos:

- Destinatário: o alias da conta SMS conectada na plataforma Zenvia .
- Remetente: o número de telefone completo (incluindo o código do país) do contato.
O remetente vai no atributo `from` e o receptor vai no atributo `to` do objeto mensagem.

## Envie uma mensagem SMS

AUTORIZAÇÕES:(JWT) OR (TOKEN)

ESQUEMA DO CORPO DA SOLICITAÇÃO: `application/json`.

a partir de requeridos:
  string ( ID do remetente ) <= 64 caracteres
  O identificador do remetente da mensagem. O remetente é criado quando uma integração para o canal é conectada no console de integrações . Mais detalhes na seção de remetente e destinatário
  do canal.

para requeridos:
  string ( ID do destinatário ) <= 64 caracteres
  O identificador do destinatário (varia de acordo com o canal) da mensagem. Mais detalhes na seção de remetente e destinatário
  do canal.

conteúdo requeridos:
  Matriz de objetos não vazia
  A lista de conteúdos a enviar.

POST /canais/sms/mensagens

## Respostas:
200 Mensagem criada

```
{
  "id": "string",
  "from": "string",
  "to": "string",
  "direction": "IN",
  "channel": "string",
  "contents": [
    {
      "type": "text",
      "text": "This is a text.",
      "payload": "string",
      "encodingStrategy": "AUTO"
    }
  ],
  "timestamp": "2019-08-24T14:15:22Z"
}
```