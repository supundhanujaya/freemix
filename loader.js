(function() {
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
                    <input type="email" id="client-email" placeholder="EMAIL ADDRESS" required>
                    <input type="text" id="song-title" placeholder="SONG TITLE" required>
                    <input type="text" id="stems-link" placeholder="PASTE STEMS LINK" required>
                    <textarea id="mix-notes" placeholder="MIX NOTES / BPM / KEY" rows="4"></textarea>
                </div>
                <button type="button" id="submit-btn" class="action-btn">
                    <div class="progress-bar" id="p-bar"></div>
                    <span id="btn-text">BOOK PROJECT</span>
                </button>
            </form>
        </div>
        <div id="ui-success" style="display:none; text-align:center; padding:40px 0;">
            <p style="font-weight:900; letter-spacing:2px; color:#0f172a;">SIGNAL RECEIVED</p>
            <p style="font-size:12px; color:#64748b;">Supun has been notified.</p>
        </div>
    </div>
    <style>
        #surgical-upload-node { background:#fff; border:1px solid #e2e8f0; padding:40px; border-radius:28px; max-width:440px; margin:20px auto; font-family:sans-serif; box-shadow:0 20px 50px rgba(0,0,0,0.05); }
        .node-header { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:30px; }
        .signal-indicator { width:7px; height:7px; background:#9c27b0; border-radius:50%; animation:pulse 1.5s infinite; }
        .status-text { font-size:10px; letter-spacing:3px; font-weight:800; color:#0f172a; }
        input, textarea { width:100%; padding:15px; margin-bottom:15px; border:1px solid #e2e8f0; border-radius:12px; background:#f8fafc; font-size:12px; }
        .action-btn { position:relative; width:100%; padding:20px; border-radius:50px; border:none; background:#0f172a; color:#fff; font-weight:800; letter-spacing:2px; font-size:11px; cursor:pointer; overflow:hidden; }
        .progress-bar { position:absolute; left:0; top:0; height:100%; width:0%; background:rgba(255,255,255,0.2); transition: width 3s linear; }
        @keyframes pulse { 0%, 100% { opacity:0.5; } 50% { opacity:1; } }
    </style>
    `;

    // Inject the HTML into the target div in Carrd
    const target = document.getElementById('uplink-target');
    if (target) {
        target.innerHTML = uplinkHTML;
        
        // Re-attach your validation/submit logic here
        const btn = target.querySelector('#submit-btn');
        const btnText = target.querySelector('#btn-text');
        const pBar = target.querySelector('#p-bar');

        btn.addEventListener('click', () => {
            btnText.innerHTML = 'UPLINKING...';
            pBar.style.width = '100%';
            // Add your fetch logic here...
            setTimeout(() => {
                target.querySelector('#ui-container').style.display = 'none';
                target.querySelector('#ui-success').style.display = 'block';
            }, 3200);
        });
    }
})();
