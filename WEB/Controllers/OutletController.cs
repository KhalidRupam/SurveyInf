﻿using Survey.Entity;
using SurveyDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace WEB.Controllers
{
    public class OutletController : Controller
    {
        // GET: Outlet
        public JsonResult Get()
        {
            try
            {
                var list = Facade.LU_OutletDAO.Get();
                string contentType = "application/json";
                return Json(list, contentType, Encoding.UTF8, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public string Post(LU_Outlet obj, string transactionType)
        {
            string ret = string.Empty;

            try
            {
                obj.CreatorId = 1;
                obj.ModifierId = 1;
                obj.CreationDate = DateTime.Now;
                obj.ModificationDate = DateTime.Now;
                ret = Facade.LU_OutletDAO.Post(obj, transactionType);
                return ret;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}