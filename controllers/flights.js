const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
new: newFlight,
create,
index,
show
};
function newFlight(req, res){
    const newFlight = new Flight();
    const dt =newFlight.departs;
    let departDate = dt.toISOString().slice(0,16);

res.render('flights/new', {departDate});
}

function create(req, res){
    const flight = new Flight(req.body);
    flight.save(function(err){
    if(err) return res.render('flights/new');
    console.log(flight);

})
res.redirect('/flights')
}

function index(req, res){
Flight.find({}, function(err,flights){
        res.render('flights/index',{
            flights
        })
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight:flight._id},function(err,tickets){
        
        
        // Now you can pass both the flight and tickets in the res.render call
       console.log("flight",flight._id);
      res.render('flights/show', {
          title: 'Flight Details', flight,tickets
          });


      })
       
        });
    
        // Now you can pass both the flight and tickets in the res.render call

}
