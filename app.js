/**
 * @param {*} probes 
 */
function macsByRadio(probes) {

  let reduceProbesArray = [];

  if(!probes){
    return reduceProbesArray;
  }

  for (let { mac, radio } of probes) {

    if (reduceProbesArray.length === 0) {
      reduceProbesArray.push({ radio, macs: [mac] })

    } else {

      const currentProbe = reduceProbesArray.find(probe => probe.radio === radio);

      if (currentProbe) {
        currentProbe.macs.push(mac)
      } else {
        reduceProbesArray.push({ radio, macs: [mac] })
      }
    }
  }
  return reduceProbesArray;
}

module.exports = { macsByRadio };