// import React from 'react'
// import "./Contact.css"
// import { MdCall } from 'react-icons/md'
// import { BsFillChatDotsFill } from 'react-icons/bs'
// import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

// function Contact() {
//   return (
//    <section className='c-wrapper'>
//     <div className='paddings innerWidth flexCenter c-container'>
//         {/* left */}
//         <div className='flexColStart c-left'>
//          <span className='orangeText'>Contact</span>
//          <span className='primaryText'>Easy To Contact Us</span>
//          <span className='secondaryText'>We always ready to help by providing the best service belive a
//              good place to live can make sure life better </span>


//        <div className='flexColStart contactModes'>
//         <div className='flexStart row'>
//             <div className='flexColCenter mode'>
//                 <div className='flexStart'>
//                     <div className='flexCenter icon'>
//                         <MdCall size={25}/>
//                     </div>
//                     <div className='flexColStart detail'>
//                         <span className='primaryText'>Call</span>
//                         <span className='secondaryText'>021 123 145 14</span>
//                     </div>
//                 </div>
//                 <div className='flexCenter button'>Call Now</div>
//             </div>
//             {/* second */}
//             <div className='flexColCenter mode'>
//                 <div className='flexStart'>
//                     <div className='flexCenter icon'>
//                         <BsFillChatDotsFill size={25}/>
//                     </div>
//                     <div className='flexColStart detail'>
//                         <span className='primaryText'>Chat</span>
//                         <span className='secondaryText'>021 123 145 14</span>
//                     </div>
//                 </div>
//                 <div className='flexCenter button'>Chat Now</div>
//             </div>
//         </div>
//         {/* second row */}
//         <div className='flexStart row'>
//             <div className='flexColCenter mode'>
//                 <div className='flexStart'>
//                     <div className='flexCenter icon'>
//                         <BsFillChatDotsFill size={25}/>
//                     </div>
//                     <div className='flexColStart detail'>
//                         <span className='primaryText'>Video Call</span>
//                         <span className='secondaryText'>021 123 145 14</span>
//                     </div>
//                 </div>
//                 <div className='flexCenter button'>Vido Call Now</div>
//             </div>
//             {/* fourth */}
//             <div className='flexColCenter mode'>
//                 <div className='flexStart'>
//                     <div className='flexCenter icon'>
//                         <HiChatBubbleBottomCenter size={25}/>
//                     </div>
//                     <div className='flexColStart detail'>
//                         <span className='primaryText'>Message</span>
//                         <span className='secondaryText'>021 123 145 14</span>
//                     </div>
//                 </div>
//                 <div className='flexCenter button'>Chat Now</div>
//             </div>
//         </div>
//        </div>
//         </div>
//         <div className='c-rigth'>
//             <div className='image-container'>
//                 <img src='./contact.jpg' alt=''/>
//             </div>
//         </div>
//     </div>
//    </section>
//   )
// }

// export default Contact
import React, { useState, useEffect } from 'react';
import "./Contact.css";
// import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { MdCall, MdVideocam, MdCallEnd, MdVolumeUp, MdMicOff, MdMic } from 'react-icons/md';
function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRinging, setIsRinging] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
//   const [isRinging, setIsRinging] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isCallActive, setIsCallActive] = useState(false);


  const openModal = (number) => {
    setPhoneNumber(number);
    setIsModalOpen(true);
    setIsRinging(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRinging(false);
  };
  const openChatModal = () => {
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };
  const openVideoCall = () => {
    setIsVideoModalOpen(true);
    setIsRinging(true);
    setCallDuration(0);
  };

  // Close Video Call Modal
  const closeVideoCall = () => {
    setIsVideoModalOpen(false);
    setIsRinging(false);
    setIsCallActive(false);
  };

  // Accept the Call
  const acceptCall = () => {
    setIsRinging(false);
    setIsCallActive(true);
  };

  // Toggle Mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Simulate Call Timer
  useEffect(() => {
    let timer;
    if (isCallActive) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCallActive]);

  // Convert Seconds to MM:SS Format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {/* left */}
        <div className='flexColStart c-left'>
          <span className='orangeText'>Contact</span>
          <span className='primaryText'>Easy To Contact Us</span>
          <span className='secondaryText'>We always ready to help by providing the best service. Believe a
            good place to live can make life better.</span>

          <div className='flexColStart contactModes'>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>021 123 145 14</span>
                  </div>
                </div>
                <div className='flexCenter button' onClick={() => openModal('021 123 145 14')}>Call Now</div>
              </div>
              {/* second */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>021 123 145 14</span>
                  </div>
                </div>
                <div className='flexCenter button' onClick={openChatModal}>Chat Now</div>
              </div>
            </div>
          </div>
      
        <div className='flexStart row'>
             <div className='flexColCenter mode'>
                 <div className='flexStart'>
                     <div className='flexCenter icon'>
                         <BsFillChatDotsFill size={25}/>
                     </div>
                     <div className='flexColStart detail'>
                         <span className='primaryText'>Video Call</span>
                         <span className='secondaryText'>021 123 145 14</span>                  
                            </div>
                 </div>              
                 <div className='flexCenter button' onClick={openVideoCall}>Video Call Now</div>
             </div>
            
            {/* fourth */}
             <div className='flexColCenter mode'>
                <div className='flexStart'>
                     <div className='flexCenter icon'>                      
                           <HiChatBubbleBottomCenter size={25}/>
                    </div>
                     <div className='flexColStart detail'>
                         <span className='primaryText'>Message</span>                     
                             <span className='secondaryText'>021 123 145 14</span>
                    </div>
                 </div>
                <div className='flexCenter button'>Chat Now</div>
            </div>
        
</div>
</div>

        {/* right */}
        <div className='c-right'>
          <div className='image-container'>
            <img src='./contact.jpg' alt='' />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <p className='primaryText'>{isRinging ? 'Call is ringing...' : 'Call ended'}</p>
            <p className='secondaryText'>Calling: {phoneNumber}</p>
            <div className='modal-footer'>
              <button className='cancel-button' onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

{isChatModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <p className='primaryText'>Chat</p>
            <div className='chat-box'>
              {messages.map((msg, index) => (
                <div key={index} className='chat-message'>{msg}</div>
              ))}
            </div>
            <div className='chat-input'>
              <input 
                type='text' 
                value={currentMessage} 
                onChange={(e) => setCurrentMessage(e.target.value)} 
                placeholder='Type a message...'
              />
              <button onClick={sendMessage}>Send</button>
            </div>
            <div className='modal-footer'>
              <button className='cancel-button' onClick={closeChatModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    {isVideoModalOpen && (
        <div className='modal-overlay'>
          <div className='modal video-call-modal'>

            {/* Call Ringing UI */}
            {isRinging ? (
              <>
                <p className='primaryText'>Incoming Video Call...</p>
                <div className='ringing-animation'>
                  <MdVideocam size={60} className='video-call-icon' />
                </div>
                <div className='modal-footer'>
                  <button className='accept-button' onClick={acceptCall}>Accept</button>
                  <button className='cancel-button' onClick={closeVideoCall}>Decline</button>
                </div>
              </>
            ) : (
              <>
                {/* Active Call UI */}
                <div className='video-screen'>
                  <MdVideocam size={100} className='video-call-icon' />
                  <p className='secondaryText'>Call Duration: {formatTime(callDuration)}</p>
                </div>

                <div className='modal-footer'>
                  <button className='mute-button' onClick={toggleMute}>
                    {isMuted ? <MdMicOff size={25} /> : <MdMic size={25} />}
                  </button>
                  <button className='speaker-button'>
                    <MdVolumeUp size={25} />
                  </button>
                  <button className='end-call-button' onClick={closeVideoCall}>
                    <MdCallEnd size={25} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
    )}
    </section>
  );
}

export default Contact;
