<template>
    <div>
        <label>{{label}}</label>
        <input 
        v-bind="$attrs"
        class="form-control"
        @input="$emit('input', $event.target.value)"
        style="margin-top: 5px;
        margin-bottom: 5px;"
        :type="type"
        />
    </div>
</template>


<script>
export default {
    props : {
        label : String,
        placeholder : String,
        type : String
    }
}
</script>