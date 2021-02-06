while (true) {
    console.log("input.rotation(Rotation.PITCH)" + "input.rotation(Rotation.ROLL)")
    if (input.rotation(Rotation.Pitch) && input.rotation(Rotation.Roll) > 4) {
        music.siren.playUntilDone()
    } else {
        music.stopAllSounds()
    }
    
}
