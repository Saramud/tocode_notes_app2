<template>
  <div class="wrapper">
    <div class="wrapper-content"> 
        <section>
          <div class="container">
            
            <message :msg = 'message'  v-if='message'/>
              <!-- new note -->
            <newNote :note='note'
                @priority='priority = $event'
                :standart = 'standart'
            />
            
            <div class="note-header">
              <h1>{{ title }}</h1>
            <!-- Filter -->
            <search     
                placeholder="find your note" 
            /> 

            <div class="icons">
              <svg  v-bind:class="{ active : grid }" @click = "grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg  v-bind:class="{ active : !grid }" @click = "grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
            </div>
              <!-- note list-->
            <notes :grid='grid' /> 
          </div>
        </section>
      </div>
    </div>

</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'

export default {
  components: {
    message, 
    newNote,
    notes,
    search
  },
  data() {
    return {
            title: 'Notes App',
            search: '',
            grid: true,
            priority: '',
            standart: 'white',
            message: undefined,
            note: {
                title: '',
                descr: '',
            },
        }
  },
  
}

</script>