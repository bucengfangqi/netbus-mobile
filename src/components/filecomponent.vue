<template>
  <div class="van-uploader">
    <slot />
    <input
      v-bind="$attrs"
      ref="input"
      type="file"
      class="van-uploader__input"
      :accept="accept"
      :disabled="disabled"
	  multiple="multiple"
      @change="onChange"
    >
  </div>
</template>

<script>
export default {
  name: 'uploader',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    beforeRead: Function,
	afterRead: Function,
	multiple:String,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    arg:{
        type:Object
    }
  },
  methods: {
    onChange(event) {
      let { files } = event.target
      if (this.disabled || !files.length) {
        return
      }
      files = files.length === 1 ? files[0] : [].slice.call(files, 0)
      if (!files || this.beforeRead && !this.beforeRead(files)) {
        return
      }
      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(contents => {
          let oversize = false
          const payload = files.map((file, index) => {
            if (file.size > this.maxSize) {
              oversize = true
            }
            return {
              file: files[index],
              content: contents[index]
            }
          })
          this.onAfterRead(payload, oversize)
        })
      } else {
        this.readFile(files).then(content => {
          this.onAfterRead(
            { file: files, content },
            files.size > this.maxSize
          )
        })
      }
    },
    readFile(file) {
      return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = event => {
          resolve(event.target.result)
        }
        if (this.resultType === 'dataUrl') {
          reader.readAsDataURL(file)
        } else if (this.resultType === 'text') {
          reader.readAsText(file)
        }
      })
    },
    onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files)
      } else {
        this.afterRead && this.afterRead(files,this.arg)
        this.$refs.input && (this.$refs.input.value = '')
      }
    }
  }
}
</script>