using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PlayersAndDices.Core;

namespace PlayersAndDices.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DatabaseController : ControllerBase
    {
        [HttpGet]
        [Route("collections")]
        public IEnumerable<string> GetCollections()
        {
            return Context.Repository.GetCollectionNames().ToArray();
        }
    }
}