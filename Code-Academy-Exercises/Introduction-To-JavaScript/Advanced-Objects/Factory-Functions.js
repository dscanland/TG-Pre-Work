const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
const tinCan = robotFactory('P-500', true)

tinCan.beep()

// I learned how to use the factory function in order to quickly replicate objects 
