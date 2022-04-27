const ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
create,
new: newticket,
addToFlight
};

function addToFlight(req, res){
    Flight.findById(req.params.id, function(error,flight){
      flight.flight.push(req.body.flightId);
      flight.save(function(error){
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }
function create(req, res){
  console.log("retrt");
const t = new ticket(req.body);
t.save(function(err){
  if(err){
    res.redirect('/flights/${req.params.id}');
  }
})
    
}

function newticket(req, res){
    ticket.find({}, function(err,tickets){
        res.render('tickets/new',{
            title:'Add Ticket',
            tickets
            
            
        });
        
        
    });
}