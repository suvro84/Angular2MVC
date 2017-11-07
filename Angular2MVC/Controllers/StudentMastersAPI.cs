using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;
//using Angular2ASPCORE.Data;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.AspNetCore.Http;
using System.Web.Http;
using System.Data.Entity.Infrastructure;
using System.Web.Http.ModelBinding;
using System.Web.Http.Results;
using Angular2MVC.Controllers;
using System.Net.Http;
using Angular2MVC.DBContext;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2ASPCORE.Controllers
{
	//[Produces("application/json")]
	//[Route("api/StudentMastersAPI")]
    [RoutePrefix("api/StudentMastersAPI")]
    public class StudentMastersAPI : BaseAPIController
    {
        //private readonly studentContext _context;

        //public StudentMastersAPI(studentContext context)
        //{
        //    _context = context;
        //}

        // GET: api/values

        [HttpGet]
		[Route("Student")]
		public HttpResponseMessage GetStudentMasters()
		{
			//return _context.StudentMasters;
            return ToJson(UserDB.StudentMasters.AsEnumerable());
        }

        //public async Task<IActionResult> PostStudentMasters([FromBody] StudentMasters studentMasters)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _context.StudentMasters.Add(studentMasters);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (StudentMastersExists(studentMasters.StdID))
        //        {
        //            return new StatusCodeResult(StatusCodes.Status409Conflict);
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetStudentMasters", new { id = studentMasters.StdID }, studentMasters);
        //}
        //private bool StudentMastersExists(int id)
        //{
        //    return _context.StudentMasters.Any(e => e.StdID == id);
        //}
        [HttpPost]
        [Route("StudentMastersAPI")]
        public HttpResponseMessage Post([FromBody] StudentMaster studentMasters)
        {
            UserDB.StudentMasters.Add(studentMasters);
            return ToJson(UserDB.SaveChanges());
        }
    }
}