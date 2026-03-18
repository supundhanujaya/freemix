(function() {
    // 1. YOUR EXACT HTML
    const uplinkHTML = `
    <div id="surgical-upload-node">
        <div id="ui-container">
            <div class="node-header">
                <span class="signal-indicator"></span>
                <span class="status-text">SEND YOUR STEMS</span>
            </div>
            <form id="ui-form" autocomplete="off">
                <div class="input-group">
                    <input type="text" id="client-name" placeholder="ARTIST NAME" required>
                    <div class="field-wrap">
                        <input type="email" id="client-email" placeholder="EMAIL ADDRESS" required>
                        <span class="error-label">STRICT FORMAT: NAME@DOMAIN.COM</span>
                    </div>
                    <input type="text" id="song-title" placeholder="SONG TITLE" required>
                    <div class="field-wrap">
                        <input type="text" id="stems-link" placeholder="PASTE STEMS LINK (HTTPS://...)" required>
                        <span class="error-label">INVALID FORMAT: MUST START WITH HTTPS://</span>
                    </div>
                    <textarea id="mix-notes" placeholder="MIX NOTES / REFERENCES / INSTRUCTIONS" rows="4"></textarea>
                </div>
                <div id="surgical-checklist-centered">
                    <span class="mini-title">Pre-Session Requirements</span>
                    <div class="slim-list">
                        <div class="slim-item"><span class="slim-num">01.</span><div class="slim-text"><b>Stems:</b> <span>Dry WAV/AIFF. Properly labeled.</span></div></div>
                        <div class="slim-item"><span class="slim-num">02.</span><div class="slim-text"><b>Data:</b> <span>Include BPM & Key in notes.</span></div></div>
                        <div class="slim-item"><span class="slim-num">03.</span><div class="slim-text"><b>Refs:</b> <span>Rough demo + Reference tracks.</span></div></div>
                    </div>
                    <div class="mini-guarantee"><span class="highlight-val">Worthy of a $220 full production.</span></div>
                </div>
                <p class="instruction-text" style="margin-top: 20px;">BOOK YOUR FREE MIX</p>
                <button type="button" id="submit-btn" class="action-btn">
                    <div class="progress-bar" id="p-bar"></div>
                    <span id="btn-text">BOOK</span>
                </button>
            </form>
        </div>
        <div id="ui-success" style="display:none;">
            <div style="width: 14px; height: 14px; background: #10b981; border-radius: 50%; box-shadow: 0 0 25px rgba(16, 185, 129, 0.5); margin: 0 auto 30px auto; animation: pulse 2s infinite;"></div>
            <p style="color: #0f172a; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; font-size: 11px;">PROJECT BOOKED!</p>
            <p style="font-size: 14px; color: #64748b; margin-top: 12px; line-height: 1.6; max-width: 320px; margin: 12px auto 0 auto;">Check your inbox. Supun has been notified.</p>
        </div>
    </div>
    
    <style>
        #surgical-upload-node { background: #ffffff; border: 1px solid #e2e8f0; padding: 45px; width: 100%; max-width: 440px; margin: 20px auto; text-align: center; box-shadow: 0 30px 70px rgba(0,0,0,0.04); border-radius: 28px; font-family: 'Inter', sans-serif; }
        .node-header { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 35px; }
        .signal-indicator { width: 7px; height: 7px; background: #9c27b0; border-radius: 50%; box-shadow: 0 0 12px #9c27b0; animation: pulse 1.5s infinite; }
        .status-text { font-size: 10px; letter-spacing: 3px; color: #0f172a; font-weight: 800; text-transform: uppercase; }
        .input-group { display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px; }
        #surgical-upload-node input, #surgical-upload-node textarea { width: 100%; padding: 15px; border: 1px solid #e2e8f0; font-size: 12px; font-weight: 500; outline: none; border-radius: 12px; background: #f8fafc; color: #1e293b; text-transform: uppercase; }
        #surgical-upload-node textarea { text-transform: none; min-height: 100px; }
        .is-invalid { border-color: #ef4444 !important; background: #fff8f8 !important; }
        .error-label { display: none; font-size: 8px; color: #ef4444; font-weight: 800; margin-top: 6px; text-align: left; }
        .is-invalid + .error-label { display: block; }
        .action-btn { position: relative; background: #e2e8f0; color: #94a3b8; border: none; padding: 20px; font-size: 11px; font-weight: 800; letter-spacing: 3px; cursor: not-allowed; width: 100%; border-radius: 50px; text-transform: uppercase; overflow: hidden; }
        .action-btn.active { background: #0f172a; color: #fff; cursor: pointer; }
        .progress-bar { position: absolute; left: 0; top: 0; height: 100%; width: 0%; background: rgba(255, 255, 255, 0.15); transition: width 1.2s ease; }
        .dots::after { content: ''; animation: dot-cycle 1.5s infinite; }
        @keyframes dot-cycle { 0% { content: ''; } 25% { content: '.'; } 50% { content: '..'; } 75% { content: '...'; } 100% { content: ''; } }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .shake { animation: shake 0.4s both; }
        @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
        #surgical-checklist-centered { margin: 30px 0 10px; border-top: 1px solid #eee; padding-top: 15px; }
        .mini-title { font-size: 10px; color: #3351d6; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; }
        .slim-list { font-size: 11px; color: #666; margin-top: 10px; text-align: left; }
    </style>
    `;

    const target = document.getElementById('uplink-target');
    if (target) {
        target.innerHTML = uplinkHTML;
        
        // 2. YOUR EXACT LOGIC
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeFviQGb1xxacQ9rfyeGkJ7pmVKCip-gmvxVhE6O-h4H_q_4FUqeckdmDMwVxYT_1A/exec';
        const btn = target.querySelector('#submit-btn');
        const btnText = target.querySelector('#btn-text');
        const pBar = target.querySelector('#p-bar');
        const emailInput = target.querySelector('#client-email');
        const linkInput = target.querySelector('#stems-link');
        const allInputs = target.querySelectorAll('input[required]');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;
        const linkRegex = /^https?:\/\/.+/;

        function validate() {
            let ready = emailRegex.test(emailInput.value) && linkRegex.test(linkInput.value);
            allInputs.forEach(i => { if(!i.value.trim()) ready = false; });
            btn.classList.toggle('active', ready);
        }

        allInputs.forEach(i => {
            i.addEventListener('input', () => {
                i.classList.remove('is-invalid', 'shake');
                validate();
            });
        });

        btn.addEventListener('click', () => {
            if(!btn.classList.contains('active')) {
                allInputs.forEach(i => {
                    if(!i.value.trim() || (i === emailInput && !emailRegex.test(i.value)) || (i === linkInput && !linkRegex.test(i.value))) {
                        i.classList.add('is-invalid', 'shake');
                    }
                });
                target.querySelector('#surgical-upload-node').classList.add('shake');
                setTimeout(() => target.querySelector('#surgical-upload-node').classList.remove('shake'), 400);
                return;
            }

            btnText.innerHTML = 'BOOKING PROJECT<span class="dots"></span>';
            btn.classList.add('processing');
            pBar.style.width = "100%";

            const data = {
                name: target.querySelector('#client-name').value,
                songTitle: target.querySelector('#song-title').value,
                clientEmail: emailInput.value,
                stemsLink: linkInput.value,
                clientNotes: target.querySelector('#mix-notes').value
            };

            fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(data) })
            .then(() => {
                setTimeout(() => {
                    target.querySelector('#ui-container').style.display = 'none';
                    target.querySelector('#ui-success').style.display = 'block';
                }, 1500);
            });
        });
    }
})();
