<template>

  <div class="chat">
    <div class="yours messages">
      <div class="review">
        <div class="userarea">
          <div class="circle"></div>
          <div><p>Алена Мальцева</p></div>
          <div class="stars">

            <div>
              <svg width="20px" height="20px" viewBox="0 0 300 275" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111" />
              </svg>
            </div>
            <div>
              <svg width="20px" height="20px" viewBox="0 0 300 275" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111" />
              </svg>
            </div>
            <div>
              <svg width="20px" height="20px" viewBox="0 0 300 275" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111" />
              </svg>
            </div>
            <div>
              <svg width="20px" height="20px" viewBox="0 0 300 275" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111" />
              </svg>
            </div>
            <div>
              <svg width="20px" height="20px" viewBox="0 0 300 275" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111" />
              </svg>
            </div>
          </div>
        </div>
        <div class="message last">
          Очень довольна услугами центра
        </div>
      </div>
    </div>
    <div class="mine messages">
      <div class="message last">
        Спсибо за ваш отзыв!
      </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Reviews',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">

.stars{
  display: flex;
  flex-direction: row;
}
.review{
  display: flex;
  flex-direction: row;
}
.userarea{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  width: max-content;
}
.circle {
  background: #eee;
  border: 0.1875em #eee;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.chat {
  margin-left: 10vw;
  width: 80vw;
  display: flex;
  flex-direction: column;
  background: white;
}

.messages {
  flex-direction: column;
}

.message {
  height: min-content;
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
}

.yours {
  align-items: flex-start;
}

.yours .message {
  background-color: #eee;
  position: relative;
  margin-left: 5%;
}

.yours .message.last:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: -7px;
  height: 20px;
  width: 20px;
  background: #eee;
  border-bottom-right-radius: 15px;
}
.yours .message.last:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: -10px;
  width: 10px;
  height: 20px;
  background: white;
  border-bottom-right-radius: 10px;
}

.mine {
  align-items: flex-end;
}

.mine .message {
  color: white;
  margin-left: 70%;
  background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
  background-attachment: fixed;
  position: relative;
}

.mine .message.last:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: -8px;
  height: 20px;
  width: 20px;
  background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
  background-attachment: fixed;
  border-bottom-left-radius: 15px;
}

.mine .message.last:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: -10px;
  width: 10px;
  height: 20px;
  background: white;
  border-bottom-left-radius: 10px;
}
@media screen and (max-width : 539px) {
  .stars{
    display: flex;
    flex-direction: row;
  }
  .review{
    display: flex;
    flex-direction: row;
  }
  .userarea{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: max-content;
  }
  .circle {
    background: #eee;
    border: 0.1875em #eee;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  .chat {
    margin-left: 10vw;
    width: 80vw;
    display: flex;
    flex-direction: column;
  }

  .messages {
    flex-direction: column;
  }

  .message {
    height: min-content;
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    width: max-content;
  }

  .yours {
    align-items: flex-start;
  }

  .yours .message {
    background-color: #eee;
    position: relative;
    margin-left: 5%;
  }

  .yours .message.last:before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: -7px;
    height: 20px;
    width: 20px;
    background: #eee;
    border-bottom-right-radius: 15px;
  }
  .yours .message.last:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-right-radius: 10px;
  }

  .mine {
    align-items: flex-end;
    width: 100%;
  }

  .mine .message {
    color: white;
    margin-left: 40%;
    background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
    background-attachment: fixed;
    position: relative;
  }

  .mine .message.last:before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -8px;
    height: 20px;
    width: 20px;
    background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
  }

  .mine .message.last:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-left-radius: 10px;
  }
}

</style>
