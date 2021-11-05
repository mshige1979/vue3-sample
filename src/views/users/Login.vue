// template
<template>
  <div class="login-contents">
    <div class="input">
      <div class="item label">
        <p>UserID</p>
      </div>
      <div class="item value">
        <input type="text" name="userid" class v-model="user_id" />
      </div>
      <div class="item length">
        <p>{{ user_id.length }}</p>
      </div>
    </div>
    <div class="input">
      <div class="item label">
        <p>Password</p>
      </div>
      <div class="item value">
        <input type="password" name="password" class v-model="password" />
      </div>
      <div class="item length">
        <p>{{ password.length }}</p>
      </div>
    </div>
    <div class="btn">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

// script
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      user_id: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      //alert(this.user_id);
    },
  },
});
</script>

// css(scss)
<style scoped lang="scss">
.login-contents {
  padding: 10px;
  width: 600px;

  .btn {
    margin: 0 auto;
    button {
      border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
      border-style: solid;
      border-width: 1px;
      padding: 1px 7px 2px;
      text-rendering: auto;
      color: initial;
      display: inline-block;
      text-align: start;
      margin: 0em;
      font: 400 11px system-ui;
      width: 200px;
      height: 33px;
      font-size: 20px;
      text-align: center;
    }
    button:active {
      position: relative;
      top: 1px;
    }
  }

  .input {
    padding: 10px;
    display: flex;

    .item {
      flex-direction: row;
      padding: 5px;
    }
    .label {
      text-align: left;
      width: 100px;
      p {
        border: 1px solid #333;
        padding: 5px;
      }
    }

    .value {
      width: 100%;

      input {
        line-height: 20px;
        width: 100%;
        padding: 5px;
      }
    }

    .length {
      p {
        margin-top: 10px;
        width: 50px;
        margin-left: 10px;
      }
    }
  }
}
</style>
