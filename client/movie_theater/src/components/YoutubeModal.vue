<script>

export default{
    props: ['trailer'],

    
}

</script>

<template>
    <div class="box-modal"> 
        <div id="myModal" class="modal fade"> 
            <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-body"> 
                        <iframe id="cartoonVideo" width="560" height="315" :src="trailer" frameborder="0" allowfullscreen></iframe> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>   
</template>

<style>
.box-modal{
    margin-left: 200px;
    margin-top: 350px;
    z-index: 999999999;
    /* background-color: white; */
}
.modal-content iframe{
    margin: 0 auto;
    display: block;
}
</style>