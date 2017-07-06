import { Component } from 'react'

//Testing web audio api
class TestAudio extends Component {

    constructor(props) {
        super(props)

        window.AudioContext = window.AudioContext || window.webkitAudioContext
        var context = new window.AudioContext()

        function process(Data) {

            var source = context.createBufferSource() // Create Sound Source
            context.decodeAudioData(Data, function(buffer){
                source.buffer = buffer
                source.connect(context.destination)
                context.suspend()
                source.start(context.currentTime)
                context.suspend()
            })
        }

        function loadSound() {
            var request = new XMLHttpRequest()
            request.open("GET", "/music", true)
            request.responseType = "arraybuffer"

            request.onload = function() {
                var Data = request.response
                process(Data)
            }

            request.send()
        }

        loadSound()

        var progress = context.getOutputTimestamp().contextTime

        this.state = ({context, progress})

        this.Play = this.Play.bind(this)
        this.Pause = this.Pause.bind(this)

        setInterval(() =>{
            var {context} = this.state
            var progress = Math.floor(context.getOutputTimestamp().contextTime)
            this.setState({context, progress})
            //console.log("timeout" + progress)
        }, 100)
    }//constructor

    Pause (context) {
        context.suspend()
    }

    Play (context) {
        context.resume()
    }

    render() {
        const {Pause, Play} = this
        var {context, progress} = this.state

        return (
            <div>
                <div onClick={() => Pause(context)}><p>Pause</p> </div>
                <div onClick={() => Play(context)}><p>Play</p> </div>
                <p>{progress}</p>
            </div>
        )
    }
}

export default TestAudio
