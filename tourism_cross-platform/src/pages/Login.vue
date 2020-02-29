<template>
    <q-page style="background-image: url(../statics/login-bg.jpg)">
        <q-dialog
                v-model="prompt"
                persistent
        >
            <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">Login to your account!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-form
                            @submit="onSubmit"
                            @reset="onReset"
                            class="q-gutter-md"
                    >
                        <q-input
                                square
                                outlined
                                type="email"
                                v-model="name"
                                label="Your email *"
                                hint="Enter your registered email address"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                        <q-input
                                square
                                outlined
                                type="password"
                                v-model="age"
                                label="Your age *"
                                lazy-rules
                                :rules="[val => val && val.length>=8 || 'Please type valid password']"
                        />

                        <q-toggle v-model="accept" label="Remember me!" />

                        <div>
                            <q-btn label="Login" type="submit" color="primary"/>
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                alert: false,
                confirm: false,
                prompt: true,

                address: '',
                name: null,
                age: null,

                accept: false
            }
        },
        methods:{
            onSubmit () {
                let self = this;
                if (this.accept !== true) {
                    self.$q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                }
                else {
                    self.$q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },

            onReset () {
                this.name = null;
                this.age = null;
                this.accept = false
            }
        }
    }
</script>

<style scoped>

</style>