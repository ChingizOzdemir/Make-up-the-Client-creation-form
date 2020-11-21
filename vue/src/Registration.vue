<template>
  <from class="sign-up" @submit.prevent="checkForm">
   <div class="container">
     <div class="col-md-8 order-md-1">
       <div class="row">

            <div class="col-md-8 order-md-3">
              <label for="surname">Фамилия:</label>
              <input id="surname" class="form-control" v-model.trim="$v.form.surname.$model">
              <p class="error" v-if="!$v.form.surname.required">Обязательное поле</p>
              <p class="error" v-if="!$v.form.surname.minLength">Здесь должно быть больше  {{$v.form.surname.$params.minLength.min}} символов.</p>
              <tree-view :data="$v.form.surname" :options="{rootObjectKey: '$v.form.surname', maxDepth: 2}"></tree-view>
            </div>

            <div class="col-md-8 order-md-3" :class="{ 'form-group--error': $v.form.name.$error }">
              <label for="name">Имя:</label>
              <input id="name" class="form-control" v-model.trim="$v.form.name.$model">
              <p class="error" v-if="!$v.form.name.required">Обязательное поле</p>
              <p class="error" v-if="!$v.form.name.minLength">Здесь должно быть больше  {{$v.form.name.$params.minLength.min}} символов.</p>
              <tree-view :data="$v.form.name" :options="{rootObjectKey: '$v.form.name', maxDepth: 2}"></tree-view>
            </div>

            <div class="col-md-8 order-md-3">
              <label for="middleName">Отчество:</label>
              <input id="middleName" class="form-control" v-model.trim="form.middleName">
            </div>

       </div>

    <div class="form-group">
      <label for="dateOfBirth">Дата рождения:</label>
      <input id="dateOfBirth" class="form-control" v-model.trim="$v.form.name.$model">
      <p class="error" v-if="!$v.form.name.required">Обязательное поле</p>
      <p class="error" v-if="!$v.form.name.minLength">Здесь должно быть больше  {{$v.form.name.$params.minLength.min}} символов.</p>
      <tree-view :data="$v.form.name" :options="{rootObjectKey: '$v.form.name', maxDepth: 2}"></tree-view>

    <div class="form-group">
      <label for="phoneNumber">Номер телефона:</label>
      <input id="phoneNumber" class="form-control" v-model.trim="form.phoneNumber">
    </div>

    <div class="form-group">
      <label for="sex">Пол:</label>
      <input id="sex" class="form-control" v-model.trim="form.sex">
    </div>

    <div class="form-group">
      <label for="clientGroup">Группа клиентов:</label>
      <select id="clientGroup" class="form-control" v-model="form.selectedClientGroups" multiple>
        <option v-for="(clientGroup, index) in clientGroups" :key="index" :value="clientGroup.value">
          {{ clientGroup.label }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="attendingDoctor">Лечащий врач:</label>
      <select id="attendingDoctor" class="form-control" v-model="form.attendingDoctor">
        <option v-for="(attendingDoctor, index) in attendingDoctors" :key="index" :value="attendingDoctor.value">
          {{ attendingDoctor.label }}
        </option>
      </select>
    </div>

    <div class="form-group" form-check>
      <input type="checkbox" id="notification" class="form-check-input" for="notification" v-model="form.doNotSendSMS">
      <label class="form-check-label" for="notification">Не отправлять СМС</label>
    </div>

    <div class="form-group">
      <label for="index">Индекс:</label>
      <input id="index" class="form-control" v-model.trim="form.index">
    </div>

    <div class="form-group">
      <label for="country">Страна:</label>
      <input id="country" class="form-control" v-model.trim="form.country">
    </div>

    <div class="form-group">
      <label for="region">Область:</label>
      <input id="region" class="form-control" v-model.trim="form.region">
    </div>

    <div class="form-group">
      <label for="city">Город:</label>
      <input id="city" class="form-control" v-model.trim="form.city">
    </div>

    <div class="form-group">
      <label for="street">Улица:</label>
      <input id="street" class="form-control" v-model.trim="form.street">
    </div>

    <div class="form-group">
      <label for="home">Дом:</label>
      <input id="home" class="form-control" v-model.trim="form.home">
    </div>

    <div class="form-group">
      <label for="documentType">Тип документа:</label>
      <select id="documentType" class="form-control" v-model="form.documentType">
        <option v-for="(documentType, index) in documentTypes" :key="index" :value="documentType.value">
          {{ documentType.label }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="series">Серия:</label>
      <input id="series" class="form-control" v-model.trim="form.series">
    </div>

    <div class="form-group">
      <label for="number">Номер:</label>
      <input id="number" class="form-control" v-model.trim="form.number">
    </div>

    <div class="form-group">
      <label for="issuedBy">Кем выдан:</label>
      <input id="issuedBy" class="form-control" v-model.trim="form.issuedBy">
    </div>

    <div class="form-group">
      <label for="dateOfIssue">Дата выдачи:</label>
      <input id="dateOfIssue" class="form-control" v-model.trim="form.dateOfIssue">
    </div>

    </div>
     <button class="btn btn-primary btn-lg btn-block" type="submit">Сохранить</button>

   </div>
   </div>
  </from>
</template>

<script>
  import { required, minLength, between, maxLength} from 'vuelidate/lib/validators'
  import { validationMixin } from 'vuelidate'

  export default {
    mixins: [validationMixin],
        data () {
          return {
            form:{
              surname: '',
              name: '',
              middleName: '',
              dateOfBirth: '',
              phoneNumber: '', /*(11 цифр. Начинается с 7)*/
              sex: '',
              doNotSendSMS: false, /*(Чекбокс)*/
              selectedClientGroups: ['VIP'],
              attendingDoctor: 'Ivanov',

              /*adres*/
              index: '',
              country: '',
              region: '',
              city: '',
              street: '',
              home: '',

              /*pasport*/
              documentType: 'Passport',

              series: '',
              number: '',
              issuedBy: '',
              dateOfIssue: ''
            },

            clientGroups: [
              {
                label: 'Важные',
                value: 'VIP'
              },
              {
                label: 'Проблемные',
                value: 'Problem'
              },
              {
                label: 'ОМС',
                value: 'CHI'
              }
            ],

            attendingDoctors: [
              {
                label: 'Иванов',
                value: 'Ivanov'
              },
              {
                label: 'Захаров',
                value: 'Zaharov'
              },
              {
                label: 'Чернышева',
                value: 'Chernisheva'
              }
            ],

            documentTypes: [
              {
                label: 'Паспорт',
                value: 'Passport'
              },
              {
                label: 'Свидетельство о рождении',
                value: 'Birth certificate'
              },
              {
                label: 'Вод. удостоверение',
                value: 'Drivers license'
              }
            ],
          }
        },
    validations: {
      form:{
        surname: {required, minLength: minLength(5), maxLength: maxLength(10)},
        name: {required, minLength: minLength(4), maxLength: maxLength(8)},
        dateOfBirth: {required, minLength: minLength(10), maxLength: maxLength(10)},
        phoneNumber: {required, minMaxLength: minLength(11), maxLength: maxLength(11)},
        selectedClientGroups: {required},
        city: {required, minLength: minLength(1)},
        documentType: {required},
        dateOfIssue: {required, minLength: minLength(10), maxLength: maxLength(10)},
      }
    },
    methods: {
      checkForm(){
        this.$v.form.$touch()
        if (!this.$v.form.$error){
          console.log('Валидация прошла успешно')
        }
      }
    }
    }
</script>

<style scoped>

</style>
